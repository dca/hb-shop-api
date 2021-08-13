import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ProductSku } from './entities/product_sku.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    @InjectRepository(ProductSku)
    private productsRepository: Repository<Product>, // private productsSkuRepository: Repository<ProductSku>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const product = new Product();
    product.name = createProductDto.name;
    product.description = createProductDto.description;

    product.skus = await Promise.all(
      createProductDto.skus.map((skuDto) => {
        // return this.productsRepository.save(skuDto);
        return this.productsRepository.manager
          .getRepository(ProductSku)
          .save(skuDto);
        // const sku = new ProductSku();
        // return sku;
      }),
    );

    return this.productsRepository.save(product);

    // return this.productsRepository.save(createProductDto);
    // const doc = this.productsRepository.create(createProductDto);
    // return this.productsRepository.save(doc);
  }

  findAll(): Promise<Product[]> {
    return this.productsRepository.find({ relations: ['skus'] });
  }

  findOne(id: string): Promise<Product> {
    return this.productsRepository.findOne(id);
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: string) {
    return this.productsRepository.delete(id);
  }
}
