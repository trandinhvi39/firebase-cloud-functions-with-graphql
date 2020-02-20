import { createServer } from "http";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { ApolloServer } from "apollo-server-express";
import xss from "xss-clean";
import helmet from "helmet";
import depthLimit from "graphql-depth-limit";
import admin from "firebase-admin";

import { typeDefs, resolvers } from "./config/apolloServer";
import constant from "./config/constant";
import serviceAccount from "../serviceAccount.json";
import AuthorDS from "../datasources/author";

require("dotenv").config();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL
});

const setupGraphQLServer = () => {
  const app = express();
  const corsOptions = {
    origin: process.env.ORIGIN_URL,
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "Accept-Language"]
  };

  app.set("trust proxy", 1);

  app.use(cors(corsOptions));
  app.use(helmet());
  app.use(xss());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.json({ limit: constant.payloadLimit }));

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    validationRules: [depthLimit(constant.depthLimit)],
    uploads: {
      maxFileSize: constant.uploadMaxFileSize,
      maxFiles: constant.uploadMaxFiles
    },
    context: async ({ req, res }) => ({
      req,
      res,
      authorDS: new AuthorDS(admin)
    }),
    introspection: true,
    playground: process.env.APP_ENV !== "prod"
  });

  apolloServer.applyMiddleware({ app, cors: false });
  const httpServer = createServer(app);
  apolloServer.installSubscriptionHandlers(httpServer);
  return app;
};

export default setupGraphQLServer;
