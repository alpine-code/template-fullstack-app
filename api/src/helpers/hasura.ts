const config = require("./config");
const { GraphQLClient } = require("graphql-request");

export const adminClient = new GraphQLClient(config.HASURA_GRAPHQL_ENDPOINT, {
  headers: {
    "x-hasura-admin-secret": config.HASURA_GRAPHQL_ADMIN_SECRET,
  },
});