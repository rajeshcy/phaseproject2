import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Foods {
    return this.getAll().find(food => food.id == id)!;
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        price: 10,
        name: "Pizza",
        imageUrl: '/assets/pizza.jpg',

      },
      {
        id: 2,
        price: 20,
        name: "Burger",
        imageUrl: '/assets/burger.jpg',
      },
      {
        id: 3,
        price: 15,
        name: "Salad",
        imageUrl: '/assets/salad.jpg',

      },
      {
        id: 4,
        price: 12,
        name: "Idli",
        imageUrl: '/assets/idli.jpg',

      },
      {
        id: 5,
        price: 14,
        name: "Dosa",
        imageUrl: '/assets/dosa.jpg',

      },
      {
        id: 6,
        price: 15,
        name: "Pasta",
        imageUrl: '/assets/pasta.jpg',

      },
      {
        id: 7,
        price: 5,
        name: "Ice Cream",
        imageUrl: '/assets/ice cream.jpg',

      },
      {
        id: 8,
        price: 5,
        name: "Noodles",
        imageUrl: '/assets/Noodles.jpg',

      }
    ];
  }
}

