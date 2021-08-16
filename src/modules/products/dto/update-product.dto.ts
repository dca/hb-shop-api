import { PickType } from '@nestjs/swagger';
import { Product } from '../entities/product.entity';

// export class UpdateProductDto extends PartialType(CreateProductDto) {}
export class UpdateProductDto extends PickType(Product, [
  'name',
  'description',
] as const) {}
