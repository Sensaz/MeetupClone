import { ObjectType, Field, ID, InputType } from "type-graphql";

@ObjectType()
export class User {
  @Field(() => ID)
  id!: Number;
  @Field(() => String)
  name!: String;
  @Field(() => String)
  email!: String;
  @Field(() => String)
  password!: String;
  @Field(() => String)
  location!: String;
}

@ObjectType()
export class AddUserResolverType {
  @Field()
  name!: string;
  @Field()
  email!: string;
  @Field()
  password!: string;
  @Field()
  location!: string;
}

@InputType()
export class RegisterInput {
  @Field()
  name!: string;
  @Field()
  email!: string;
  @Field()
  password!: string;
  @Field()
  location!: string;
}

@ObjectType()
export class EmailResolverType {
  @Field()
  email!: string;
}

@InputType()
export class EmailInput {
  @Field()
  email!: string;
}
