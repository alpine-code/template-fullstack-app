// import { types } from "../src/graphql/types";
// import resolvers from "../src/graphql/resolvers";
// import { graphql } from "graphql";
// import { makeExecutableSchema } from "graphql-tools";

// // create a mocked schema for the tests
// const schema = makeExecutableSchema({
//   typeDefs: typeDefs,
//   resolvers: ServiceResolvers,
// });

// describe("User Schema", () => {
//   test("Test getAllUsers query", async () => {
//     const query = `
//         {
//             user: getAllUsers {
//                 name
//             }
//         }
//     `;
//     return graphql(schema, query).then((result: any) => {
//       const users = result.data.user;
//       expect(users.length).toBe(2);
//     });
//   });
// });