import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartItem } from 'src/cart.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartService {

    constructor(@InjectRepository(CartItem) private repo: Repository<CartItem>) {
    }
    findByProductId(productId: number) {
        return this.repo.find({ where: { productId } });
    }
    async addProductToCart(productId: number, body) {
        const quantity = body.quantity;
        const products: CartItem[] = await this.findByProductId(productId);
        // if product is already in cart just add to the quantity
        if (products.length === 0) {
            const cartItem = this.repo.create({ productId, quantity });
            return this.repo.save(cartItem);
        } else {
            products[0].quantity += quantity;
            return this.repo.save(products[0]);
        }
    }

    getCart() {
        return this.repo.find();
    }
}


