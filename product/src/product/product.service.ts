import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  getProducts() {
    return ['Product 6', 'Product 9'];
  }
}
