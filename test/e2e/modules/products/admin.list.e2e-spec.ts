import * as request from 'supertest';
import { MockApp } from '../../setup';

describe('AdminProductController (e2e)', () => {
  it('/admin/api/v1/products (GET)', () => {
    return request(MockApp.getHttpServer())
      .get('/admin/api/v1/products')
      .expect(200)
      .expect('Content-Type', /json/);
  });
});
