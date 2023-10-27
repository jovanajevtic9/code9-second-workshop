import { Injectable } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';

@Injectable()
export class OrderService {
    @Client({
        transport: Transport.REDIS
    })
    private client: ClientProxy;

    createOrder(body) {
        return this.client.send('create_order', body)
    }

    getOrder() {
        return this.client.send('order_all', {});
    }

}
