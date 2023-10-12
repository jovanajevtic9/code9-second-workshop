import { Body, Controller, Delete, Get, Param, Put, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('product')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get('/')
  getProducts() {
    return this.productService.getProducts();
    // return this.client.send('products_all', {});
  }

  @Get('/:id')
  getProduct(@Param('id') id: string) {
    return this.productService.getProduct(id);
    // return this.client.send('product', id);
  }

  @Post('/')
  createProduct(@Body() body: any) {
    return this.productService.createProduct(body);
    // return this.client.send('product_create', body);
  }

  @Delete('/:id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
    // return this.client.send('product_delete', id);
  }

  @Put('/:id')
  updateProduct(@Param('id') id: string, @Body() body: any) {
    // return 'str';
    return this.productService.updateProduct(id, body);
    // return this.client.send('product_update', { id, body });
  }
}
