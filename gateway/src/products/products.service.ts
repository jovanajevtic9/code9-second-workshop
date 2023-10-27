import { Injectable } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import {CreateProductDto} from "../dtos/create-product.dto";

@Injectable()
export class ProductsService {
  @Client({
    transport: Transport.REDIS,
  })
  private client: ClientProxy;
  constructor() {}

  getProducts() {
    return this.client.send('show_products', {});
  }

  getProduct(id: string) {
    return this.client.send('product', id)
  }

  createProduct(body: CreateProductDto) {
    return this.client.send('create_product', body)
  }

  deleteProduct(id: string) {
    return this.client.send('delete_product', id);
  }

  updateProduct(id: string, body: any) {
    return this.client.send('update_product', {id, body});
  }
}
