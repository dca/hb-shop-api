import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './entities/product.entity';
import { ProductSku } from './entities/product_sku.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductSku])],
  // exports: [TypeOrmModule],

  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
