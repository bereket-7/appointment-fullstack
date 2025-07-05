import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'src/user/user.model';

@ObjectType()
export class LoginResponse {
  @Field()
  access_token: string;

  @Field(() => User)
  user: User;
}
