import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { PrismaClient } from "@prisma/client";

import {
  User,
  RegisterInput,
  AddUserResolverType,
  EmailInput,
  EmailResolverType,
} from "./users";

const prisma = new PrismaClient();

const prismaConnect = async () => {
  await prisma.$connect();
  const users = await prisma.user.findMany();
  const newUser = async (input: RegisterInput) =>
    await prisma.user.create({
      data: {
        name: input.name,
        email: input.email,
        password: input.password,
        location: input.location,
      },
    });

  const getUserByEmail = async (email: string) =>
    await prisma.user.findFirst({
      where: { email },
      select: { email: true },
    });

  return { users, newUser, getUserByEmail };
};

const { users, newUser, getUserByEmail } = await prismaConnect();

@Resolver(User)
export class UserResolver {
  @Query((returns) => [User])
  async users(): Promise<User[]> {
    return users;
  }
}

@Resolver()
export class AddUserResolver {
  @Mutation((returns) => AddUserResolverType)
  async createUser(@Arg("input") input: RegisterInput): Promise<RegisterInput> {
    return newUser(input);
  }
}

@Resolver()
export class GetUserByEmailResolver {
  @Query((returns) => EmailResolverType)
  async users(@Arg("email") email: string): Promise<EmailInput | null> {
    return getUserByEmail(email);
  }
}
