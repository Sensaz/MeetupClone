import { ObjectType, Field, ID } from "type-graphql";

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
