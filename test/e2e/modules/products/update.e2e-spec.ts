import * as request from 'supertest';
import * as faker from 'faker';

import { MockApp } from '../../setup';

describe('ProductController (e2e)', () => {
  it('/api/v1/products/:id (PATCH)', async () => {
    const product = await request(MockApp.getHttpServer())
      .post('/api/v1/products')
      .set('Accept', 'application/json')
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
      });
    return request(MockApp.getHttpServer())
      .patch('/api/v1/products/' + product.body.id)
      .send({
        name: product.body.name + '_updated',
      })
      .expect(200)
      .expect('Content-Type', /json/);
  });
});
