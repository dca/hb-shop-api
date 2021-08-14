import * as request from 'supertest';
import { MockApp } from '../../setup';

describe('ProductController (e2e)', () => {
  it('/api/v1/products (GET)', () => {
    return request(MockApp.getHttpServer())
      .get('/api/v1/products')
      .expect(200)
      .expect('Content-Type', /json/);
  });
});
