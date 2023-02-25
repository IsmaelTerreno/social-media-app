import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

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
    return request(app.getHttpServer())
      .post('/user/register')
      .send({ email: 'john', password: 'xxx' })
      .expect(201);
  });

  it('Login a user - POST)', () => {
    return request(app.getHttpServer())
      .post('/user/login')
      .send({ email: 'john', password: 'xxx' })
      .expect(200);
  });
});
