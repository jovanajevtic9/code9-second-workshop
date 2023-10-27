import { Body, Controller, Param } from '@nestjs/common';
import { OrderService } from './order.service';
import {Post, Get } from '@nestjs/common';
import {CreateOrderDto} from "../dtos/create-order.dto";

@Controller('order')
export class OrderController {

    constructor(private readonly orderService: OrderService){}

    @Post('/')
    createOrder(@Body() body: CreateOrderDto) {
        return this.orderService.createOrder(body);
    }

    @Get('/')
    getOrder() {
        return this.orderService.getOrder();
    }
}
