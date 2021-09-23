import { ApolloError } from "apollo-server-express";
import GraphQLJSON, { GraphQLJSONObject } from "graphql-type-json";
const { gql } = require("graphql-request");
const { adminClient } = require("../helpers/hasura");
const { startProcess } = require("../helpers/camunda");

const createArticle = gql`
  mutation createArticle($title: String!) {
    insert_articles_one(object: { title: $title, status: "submitted" }) {
      id
    }
  }
`;

const updateArticleStatus = gql`
  mutation updateArticleStatus($status: String!, $id: Int!) {
    update_articles_by_pk(pk_columns: { id: $id }, _set: { status: $status }) {
      id
    }
  }
`;

const resolvers = {
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,
  Query: {
    airaReviewerSuggestions: async (_: any, args: any) => {
      try {
        const mockUsers = [{ name: "xyz" }, { name: "abc" }];
        return mockUsers;
      } catch (err: any) {
        throw new ApolloError(err.message);
      }
    },
  },
  Mutation: {
    articleSubmit: async (_: any, args: any) => {
      try {
        const article = (
          await adminClient.request(createArticle, {
            title: args.title,
          })
        ).insert_articles_one;
        const process = await startProcess(
          "article-submitted",
          `ARTICLE-${article.id}`,
          {
            article_id: {
              value: article.id,
              type: "Integer",
            },
          }
        );
        return {
          article,
          process,
        };
      } catch (err: any) {
        throw new ApolloError(err.message);
      }
    },
    articleAccept: async (_: any, args: any) => {
      try {
        const result = await adminClient.request(updateArticleStatus, {
          id: args.id,
          status: "accepted",
        });
        return result;
      } catch (err: any) {
        throw new ApolloError(err.message);
      }
    },
    articleReject: async (_: any, args: any) => {
      try {
        const result = await adminClient.request(updateArticleStatus, {
          id: args.id,
          status: "rejected",
        });
        return result;
      } catch (err: any) {
        throw new ApolloError(err.message);
      }
    },
  },
};

export default resolvers;
