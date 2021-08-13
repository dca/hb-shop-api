import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import * as faker from 'faker';

import { AppModule } from '../../../../src/app.module';

describe('ProductController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/v1/products/:id (PATCH)', async () => {
    const product = await request(app.getHttpServer())
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
    return request(app.getHttpServer())
      .patch('/api/v1/products/' + product.body.id)
      .send({
        name: product.body.name + '_updated',
      })
      .expect(200)
      .expect('Content-Type', /json/);
  });
});
