import { merge } from "lodash";

import typeDefsAuthor from "../schema/author";
import resolversAuthor from "../resolvers/author";

const typeDefs = [typeDefsAuthor];

const resolvers = merge({}, resolversAuthor);

export { typeDefs, resolvers };
