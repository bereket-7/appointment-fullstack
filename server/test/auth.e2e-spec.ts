import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';
import { disconnect } from 'mongoose';
import { UserService } from '../src/user/user.service';
import * as bcrypt from 'bcrypt';

describe('AuthResolver (e2e)', () => {
  let app: INestApplication;
  let userService: UserService;

  const testUser = {
    username: 'testuser',
    email: 'testuser@example.com',
    password: 'password123',
    firstname: 'Test',
    lastname: 'User',
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    userService = moduleFixture.get<UserService>(UserService);

    // Create test user manually
    const hashedPassword = await bcrypt.hash(testUser.password, 10);
    await userService.create({
      ...testUser,
      password: hashedPassword,
    });
  });

  afterAll(async () => {
    await app.close();
    await disconnect();
  });

  it('should login with valid credentials', async () => {
    const loginMutation = `
      mutation {
        login(email: "${testUser.email}", password: "${testUser.password}") {
          access_token
          user {
            email
            username
          }
        }
      }
    `;

    const response = await request(app.getHttpServer())
      .post('/graphql')
      .send({ query: loginMutation });

    expect(response.body.data.login.access_token).toBeDefined();
    expect(response.body.data.login.user.email).toBe(testUser.email);
  });

  it('should fail with invalid credentials', async () => {
    const loginMutation = `
      mutation {
        login(email: "${testUser.email}", password: "wrongpass") {
          access_token
          user {
            email
            username
          }
        }
      }
    `;

    const response = await request(app.getHttpServer())
      .post('/graphql')
      .send({ query: loginMutation });

    expect(response.body.errors).toBeDefined();
    expect(response.body.data).toBeNull();
  });
});
