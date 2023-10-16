import { Body, Controller, Param } from '@nestjs/common';
import { CartService } from './cart.service';
import {Post, Get } from '@nestjs/common';

@Controller('cart')
export class CartController {

    constructor(private readonly cartService: CartService){}

    @Post('/add-product/:id')
    addProductToCart(@Param("id") id: string, @Body() body: any) {
        return this.cartService.addProductToCart(id, body)
    }

    @Get('/')
    getAllProductsFromCart() {
        return this.cartService.getAllProducts();
    }
}
