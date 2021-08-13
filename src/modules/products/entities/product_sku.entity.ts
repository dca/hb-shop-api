import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class ProductSku {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({
    length: 50,
  })
  name: string;

  @Column({
    length: 1000,
  })
  description: string;

  @Column({
    nullable: false,
    default: 0,
  })
  amount: number;

  @Column({
    nullable: false,
    default: 0,
  })
  price: number;

  @ManyToOne(() => Product, (product) => product.skus, { onDelete: 'CASCADE' })
  product: Product;
}
