import { Injectable } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';

@Injectable()
export class ProductsService {
  @Client({
    transport: Transport.REDIS,
  })
  private client: ClientProxy;
  constructor() {}

  getProducts() {
    return this.client.send('show_products', {});
    // return ['Product 3', 'Product 4'];
  }

  getProduct(id: string) {
    return `Returning product with id = ${id}`;
  }

  createProduct(body: any) {
    return body;
  }

  deleteProduct(id: string) {
    return `Deleting product with id = ${id}`;
  }

  updateProduct(id: string, body: any) {
    return `Updating product with id = ${id} with body = ${body.name}`;
  }
}
