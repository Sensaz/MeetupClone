import { Resolver, Query } from "type-graphql";
import { PrismaClient } from "@prisma/client";

import { User } from "./users";

const prisma = new PrismaClient();

const prismaConnect = async () => {
  await prisma.$connect();
  const users = await prisma.user.findMany()
  await prisma.$disconnect();
  return { users };
};

const { users } = await prismaConnect();

@Resolver(User)
export class UserResolver {
  @Query(() => [User])
  users(): User[] {
    return users;
  }
}
