import { Injectable } from '@nestjs/common';
import { Product } from './product';

@Injectable()
export class ProductService {
    products: Product[] = [
      {  id: 1, Name: "Arroz", Price: 20.00, Category: "Alimenticio"},
      {  id: 2, Name: "Feijão", Price: 10.00, Category: "Alimenticio"},
      {  id: 3, Name: "Farofa", Price: 5.00, Category: "Alimenticio"},
      {  id: 4, Name: "Batata", Price: 22.00, Category: "Alimenticio"},
      {  id: 5, Name: "Milho", Price: 4.50, Category: "Alimenticio"},
      {  id: 6, Name: "Salame", Price: 2.00, Category: "Alimenticio"},
      {  id: 7, Name: "Mandioca", Price: 12.00, Category: "Alimenticio"},
      {  id: 8, Name: "Beterraba", Price: 13.00, Category: "Alimenticio"},
    ];

    getAll(){
      return this.products;
    }

    getById(id: number){
      const product = this.products.find((value) => value.id == id);
      return product;
    }

    create(product:  Product){
          let lastId = 0;
          if (this.products.length > 0){
              lastId = this.products[this.products.length - 1].id;
          }

          product.id = lastId + 1;
          this.products.push(product);

          return product;
        }

    update(product: Product){
        const productArray = this.getById(product.id);
        if (productArray){
          productArray.Name = product.Name;
          productArray.Price = product.Price;
          productArray.Category = product.Category;
        }
        return productArray;
    }

    delete(id: number){
      const index = this.products.findIndex((value) =>value.id == id);
      this.products.splice(index, 1);
    }

}
