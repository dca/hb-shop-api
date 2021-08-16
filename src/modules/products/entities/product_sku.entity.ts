import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, Length } from 'class-validator';

import { Product } from './product.entity';

@Entity()
export class ProductSku {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ApiProperty({
    description: 'The name of a product',
  })
  @Length(0, 50)
  @IsString()
  @Column({
    length: 50,
  })
  name: string;

  @Length(0, 1000)
  @IsString()
  @ApiProperty()
  @Column({
    length: 1000,
  })
  description: string;

  @IsInt()
  @ApiProperty({
    description: 'The amount of a product sku',
    minimum: 0,
    default: 0,
  })
  @Column({
    nullable: false,
    default: 0,
  })
  amount: number;

  @IsInt()
  @ApiProperty({
    description: 'The price of a product sku',
    minimum: 0,
    default: 0,
  })
  @Column({
    nullable: false,
    default: 0,
  })
  price: number;

  @ManyToOne(() => Product, (product) => product.skus, { onDelete: 'CASCADE' })
  product: Product;
}
