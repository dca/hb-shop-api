import * as request from 'supertest';
import { MockApp } from './e2e/setup';

describe('AppController (e2e)', () => {
  it('/ (GET)', () => {
    return request(MockApp.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
