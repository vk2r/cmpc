import { NestFactory } from '@nestjs/core';
import { ProductsModule } from './products/products.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(ProductsModule);
  const config = new DocumentBuilder()
    .setTitle('Products API')
    .setDescription('API para gestión de productos')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  await app.listen(process.env.PORT || 3003);
}

bootstrap();
