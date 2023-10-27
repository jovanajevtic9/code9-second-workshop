import { Body, Controller, Delete, Get, Param, Put, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import {CreateProductDto} from "../dtos/create-product.dto";

@Controller('product')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get('/')
  getProducts() {
    return this.productService.getProducts();
  }

  @Get('/:id')
  getProduct(@Param('id') id: string) {
    return this.productService.getProduct(id);
    // return this.client.send('product', id);
  }

  @Post('/')
  createProduct(@Body() body: CreateProductDto) {
    return this.productService.createProduct(body);
  }

  @Delete('/:id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
    // return this.client.send('product_delete', id);
  }

  @Put('/:id')
  updateProduct(@Param('id') id: string, @Body() body: {quantity: number}) {
    return this.productService.updateProduct(id, body);
  }
}
