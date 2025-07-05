import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.input';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => String)
  async login(@Args('input') input: LoginInput): Promise<string> {
    const user = await this.authService.validateUser(
      input.email,
      input.password,
    );
    if (!user) throw new Error('Invalid credentials');
    const result = await this.authService.login(user);
    return result.access_token;
  }
}
