import {OrderProduct} from "./order-product.dto";
import {IsArray, ValidateNested} from "class-validator";
import {Transform, Type} from "class-transformer";

export class CreateOrderDto {
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => OrderProduct)
    orderedProducts: OrderProduct[]
}