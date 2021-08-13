import { IsString, Length, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import { CreateProductSkuDto } from './create-productsku.dto';

export class CreateProductDto {
  @Length(0, 50)
  @IsString()
  name: string;

  @Length(0, 1000)
  @IsString()
  description: string;

  @ValidateNested({ each: true })
  @Type(() => CreateProductSkuDto)
  skus: CreateProductSkuDto[];
}
