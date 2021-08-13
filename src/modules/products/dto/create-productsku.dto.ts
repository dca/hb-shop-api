import { IsString, IsInt, Length } from 'class-validator';

export class CreateProductSkuDto {
  @Length(0, 50)
  @IsString()
  name: string;

  @Length(0, 1000)
  @IsString()
  description: string;

  @IsInt()
  amount: number;

  @IsInt()
  price: number;
}
