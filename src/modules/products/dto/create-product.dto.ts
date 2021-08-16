import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsString, Length, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import { CreateProductSkuDto } from './create-productsku.dto';
import { Product } from '../entities/product.entity';

// export class CreateProductDto {
//   @Length(0, 50)
//   @IsString()
//   @ApiProperty({
//     description: 'The name of a product',
//   })
//   name: string;

//   @Length(0, 1000)
//   @IsString()
//   @ApiProperty()
//   description: string;

//   @ValidateNested({ each: true })
//   @Type(() => CreateProductSkuDto)
//   @ApiProperty({
//     type: [CreateProductSkuDto],
//   })
//   skus: CreateProductSkuDto[];
// }

export class CreateProductDto extends PickType(Product, [
  'name',
  'description',
  'skus',
] as const) {}
