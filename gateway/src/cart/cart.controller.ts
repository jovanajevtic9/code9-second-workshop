import {Body, Controller, Delete, Param} from '@nestjs/common';
import { CartService } from './cart.service';
import {Post, Get } from '@nestjs/common';
import {CreateCartDto} from "../dtos/create-cart.dto";

@Controller('cart')
export class CartController {

    constructor(private readonly cartService: CartService){}

    @Post('/add-product/:id')
    addProductToCart(@Param("id") id: string, @Body() body: CreateCartDto) {
        return this.cartService.addProductToCart(id, body)
    }

    @Get('/')
    getAllProductsFromCart() {
        return this.cartService.getAllProducts();
    }

    @Delete('/remove-product/:id')
    removeProductFromCart(@Param("id") id: string) {
        return this.cartService.removeProductFromCart(id)
    }
}
