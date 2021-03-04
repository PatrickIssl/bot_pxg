import { Injectable } from '@nestjs/common';
import { Order } from './order';

@Injectable()
export class OrderService {orders: Order[] = [
  {id:1 ,TotalPrice: 35, ProductsList: [1, 2, 3]},
  {id:2 ,TotalPrice: 38, ProductsList: [1, 3, 5]},
  {id:3 ,TotalPrice: 45, ProductsList: [1, 2, 4]},
  {id:4 ,TotalPrice: 90, ProductsList: [1, 3, 6]},
  {id:5 ,TotalPrice: 50, ProductsList: [1, 4, 5]},
];

getAll(){
  return this.orders;
}

getById(id: number){
  const product = this.orders.find((value) => value.id == id);
  return product;
}

create(order:  Order){
      let lastId = 0;
      if (this.orders.length > 0){
          lastId = this.orders[this.orders.length - 1].id;
      }

      order.id = lastId + 1;
      this.orders.push(order);

      return order;
    }

update(order: Order){
    const orderArray = this.getById(order.id);
    if (orderArray){
      orderArray.TotalPrice = order.TotalPrice;
      orderArray.ProductsList = order.ProductsList;
    }
    return orderArray;
}

delete(id: number){
  const index = this.orders.findIndex((value) =>value.id == id);
  this.orders.splice(index, 1);
}

}
