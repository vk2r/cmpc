import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from './dto/product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() productDto: Omit<ProductDto, 'id'>): ProductDto {
    return this.productsService.create(productDto);
  }

  @Get()
  findAll(): ProductDto[] {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): ProductDto {
    return this.productsService.findOne(id);
  }

  @Put()
  update(@Body() productDto: ProductDto): ProductDto {
    return this.productsService.update(productDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    this.productsService.remove(id);
  }
}
