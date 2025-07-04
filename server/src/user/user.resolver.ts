import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { User } from './user.model';
import { CreateUserInput } from './dto/create-user.input';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  register(@Args('input') input: CreateUserInput): Promise<User> {
    return this.userService.create(input);
  }

  @Query(() => [User])
  users(): Promise<User[]> {
    return this.userService.findAll();
  }
}
