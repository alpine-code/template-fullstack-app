import { gql } from "apollo-server-express";

export const types = gql`
  scalar JSON
  scalar JSONObject
  type AiraReviewerSuggestion {
    name: String
  }
  type Query {
    airaReviewerSuggestions: [AiraReviewerSuggestion]
  }
  type Mutation {
    articleSubmit(title: String!): JSONObject
    articleAccept(id: Int!): JSONObject
    articleReject(id: Int!): JSONObject
  }
`;
