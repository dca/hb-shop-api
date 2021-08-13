import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { ProductSku } from './product_sku.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  public id: number;

  @Column({ length: 50 })
  public name: string;

  @Column({ length: 1000 })
  public description: string;

  @Column({ default: true })
  public isActive: boolean;

  @OneToMany(() => ProductSku, (sku) => sku.product, { cascade: true })
  @JoinTable()
  public skus: ProductSku[];
}
