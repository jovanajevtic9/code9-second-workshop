import { Injectable } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';

@Injectable()
export class CartService {
    @Client({
        transport: Transport.REDIS
    })
    private client: ClientProxy;

 
    addProductToCart(id, body) {
        return this.client.send('add_product_to_cart', {id, body})
    }

    getAllProducts() {
        return this.client.send('all_products_cart', {})
    }

    removeProductFromCart(id) {
        return this.client.send('remove_product_from_cart', {id})
    }
}
