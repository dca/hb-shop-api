import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsService } from './products.service';
import { ProductsController } from './controllers/products.controller';
import { AdminProductsController } from './controllers/admin.products.controller';
import { Product } from './entities/product.entity';
import { ProductSku } from './entities/product_sku.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductSku])],
  // exports: [TypeOrmModule],

  controllers: [ProductsController, AdminProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
