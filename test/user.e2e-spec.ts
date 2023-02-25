import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { generateTestEmail } from './utils';

describe('UserController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Register a user - POST', () => {
    const testUser = {
      email: generateTestEmail(),
      password: 'xxx',
    };
    return request(app.getHttpServer())
      .post('/user/register')
      .send(testUser)
      .expect(201);
  });

  it('Login a user - POST)', () => {
    const testUser = {
      email: generateTestEmail(),
      password: 'xxx',
    };
    request(app.getHttpServer())
      .post('/user/register')
      .send(testUser)
      .expect(201);
    return request(app.getHttpServer())
      .post('/user/login')
      .send(testUser)
      .expect(200);
  });
});
