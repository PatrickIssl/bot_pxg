import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Order } from './shared/order';
import { OrderService } from './shared/order.service';

@Controller('orders')
export class OrdersController {

  constructor(
    private orderService: OrderService
){   }

@Get()
 async getAll(): Promise<Order[]> { 
  return this.orderService.getAll();
} 
@Get(':id')
 async getById(@Param('id') id:number ): Promise<Order> { 
  return this.orderService.getById(id);
} 

@Post()
async create(@Body() order:Order): Promise<Order> {
    return this.orderService.create(order);
}

@Put(':id')
async update(@Param('id') id:number, @Body() order:Order): Promise<Order> {
  order.id = id;
  return this.orderService.update(order);
}

@Delete(':id')
async delete(@Param('id') id:number){
    this.orderService.delete(id);
}

}
