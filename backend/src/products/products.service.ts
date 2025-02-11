import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { nanoid } from 'nanoid';

@Injectable()
export class ProductsService {
  private products: ProductDto[] = [
    {
      id: nanoid(),
      name: 'Sonic',
      price: 15000,
      stock: 10,
      selled: 5,
      demand: 35,
      date: '2025-01-01',
    },
    {
      id: nanoid(),
      name: 'Barbie',
      price: 25000,
      stock: 100,
      selled: 15,
      demand: 60,
      date: '2025-02-01',
    },
    {
      id: nanoid(),
      name: 'Max Steel',
      price: 40000,
      stock: 30,
      selled: 15,
      demand: 32,
      date: '2025-03-01',
    },
  ];

  create(productDto: Omit<ProductDto, 'id'>): ProductDto {
    if (!productDto.name || !productDto.price) {
      throw new BadRequestException('Nombre y precio son requeridos');
    }

    const newProduct: ProductDto = {
      id: nanoid(),
      ...productDto,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  findAll(): ProductDto[] {
    return this.products;
  }

  findOne(id: string): ProductDto {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException('Producto no encontrado');
    }
    return product;
  }

  update(productDto: ProductDto): ProductDto {
    if (!productDto.name || !productDto.price) {
      throw new BadRequestException('Nombre y precio son requeridos');
    }

    const index = this.products.findIndex(
      (product) => product.id === productDto.id,
    );
    if (index === -1) {
      throw new NotFoundException('Producto no encontrado');
    }
    this.products[index] = productDto;
    return productDto;
  }

  remove(id: string): void {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw new NotFoundException('Producto no encontrado');
    }
    this.products.splice(index, 1);
  }
}
