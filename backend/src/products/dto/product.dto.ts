import { IsString, IsNumber, IsDateString } from 'class-validator';

export class ProductDto {
  @IsString()
  readonly id!: string;

  @IsString()
  readonly name!: string;

  @IsNumber()
  readonly price!: number;

  @IsNumber()
  readonly stock!: number;

  @IsNumber()
  readonly selled!: number;

  @IsNumber()
  readonly demand!: number;

  @IsDateString()
  readonly date!: string;
}
