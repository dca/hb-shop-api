import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, Length } from 'class-validator';

export class CreateProductSkuDto {
  @Length(0, 50)
  @IsString()
  @ApiProperty({
    description: 'The name of a product',
  })
  name: string;

  @Length(0, 1000)
  @IsString()
  @ApiProperty()
  description: string;

  @IsInt()
  @ApiProperty({
    description: 'The amount of a product sku',
    minimum: 0,
    default: 0,
  })
  amount: number;

  @IsInt()
  @ApiProperty({
    description: 'The price of a product sku',
    minimum: 0,
    default: 0,
  })
  price: number;
}
