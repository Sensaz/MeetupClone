import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";

import { buildSchema } from "type-graphql";

import { UserResolver } from "../../../request/schema/users.resolver";

const schema = await buildSchema({
  resolvers: [UserResolver],
});

const server = new ApolloServer({
  schema,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const statrtServer = server.start();

export default async function handler(req, res) {
  await statrtServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
}
