import { getLocaleCurrencyCode } from '@angular/common';
import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
 
  constructor() { }

  getFoodById(id:number):Foods{
    return this.getAll().find(food=>food.id==id)!;
  }

  getAll():Foods[]{
    return [
      {
        id :1,
        price:10,
        name:"Pizza",
        //favorite: false,
        //star:4.5,
        //tags:["Indian, Italy"],
        imageUrl:'/assets/pizza.jpg',
        //cooktime:'20-30',
        //origin:['italy']
    },
    {
      id :2,
      price:20,
      name:"Burger",
      //favorite: false,
      //star:4.5,
      //tags:["Indian, Italy"],
      imageUrl:'/assets/burger.jpg',
      //cooktime:'10-20',
      //origin:['italy']
    },
    {
      id :3,
      price:15,
      name:"Salad",
      //favorite: false,
      //star:4.5,
      //tags:["India"],
      imageUrl:'/assets/salad.jpg',
      //cooktime:'5-10',
      //origin:['India']
    },
    {
      id :4,
      price:12,
      name:"Idli",
      //favorite: false,
      //star:4.5,
      //tags:["Indian"],
      imageUrl:'/assets/idli.jpg',
      //cooktime:'15-20',
      //origin:['Idli']
    },
    {
      id :5,
      price:14,
      name:"Dosa",
     // favorite: false,
     // star:4.5,
      //tags:["Indian"],
      imageUrl:'/assets/dosa.jpg',
      //cooktime:'5-10',
     // origin:['India']
    },
    {
      id :6,
      price:15,
      name:"Pasta",
      //favorite: false,
      //star:4.5,
      //tags:["Indian, Italy"],
      imageUrl:'/assets/pasta.jpg',
      //cooktime:'10-20',
      //origin:['italy']
    },
    {
      id :7,
      price:5,
      name:"Ice Cream",
     // favorite: false,
      //star:4.5,
      //tags:["Italy"],
      imageUrl:'/assets/ice cream.jpg',
      //cooktime:'1-5',
      //origin:['italy']
    },
    {
      id :8,
      price:5,
      name:"Noodles",
      //favorite: false,
     // star:4.5,
      //tags:["USA"],
      imageUrl:'/assets/Noodles.jpg',
      //cooktime:'0',
      //origin:['USA']
    }
    ];
}
}

