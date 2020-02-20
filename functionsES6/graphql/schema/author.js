import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Author {
    id: String!
    firstName: String!
    lastName: String!
  }

  type Query {
    author(id: String!): Author
    authors: [Author]
  }

  type Mutation {
    createAuthor(firstName: String!, lastName: String!): Author
    deleteAuthor(id: String!): Boolean!
  }
`;

export default typeDefs;
