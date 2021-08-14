import * as request from 'supertest';
import * as faker from 'faker';

import { MockApp } from '../../setup';

describe('ProductController (e2e)', () => {
  it('/api/v1/products (POST)', () => {
    return request(MockApp.getHttpServer())
      .post('/api/v1/products')
      .send({
        name: `product-${faker.commerce.price()}`,
        description: faker.commerce.productDescription(),
        skus: [
          {
            name: faker.commerce.color(),
            description: '',
            amount: +faker.commerce.price(),
            price: +faker.commerce.price(),
          },
        ],
      })
      .set('Accept', 'application/json')
      .expect(201)
      .expect('Content-Type', /json/);
  });
});
