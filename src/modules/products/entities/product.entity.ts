import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { IsString, Length, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

import { ProductSku } from './product_sku.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  public id: number;

  @ApiProperty({
    description: 'The name of a product',
  })
  @Length(0, 50)
  @IsString()
  @Column({ length: 50 })
  public name: string;

  @ApiProperty({
    description: 'The description of a product',
  })
  @Length(0, 1000)
  @IsString()
  @Column({ length: 1000 })
  public description: string;

  @Column({ default: true })
  public isActive: boolean;

  @ApiProperty({
    type: [ProductSku],
  })
  @ValidateNested({ each: true })
  @Type(() => ProductSku)
  @OneToMany(() => ProductSku, (sku) => sku.product, { cascade: true })
  @JoinTable()
  public skus: ProductSku[];
}
