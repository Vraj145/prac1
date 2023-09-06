import { Component,OnInit} from '@angular/core';
import { IProduct } from './iproduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'data display';
  products: IProduct[]=[];
  showImage = true;

  constructor(){

  }

  ngOnInit(){
    this.products = this.getProducts();
  }

  toggleImage():void{
    this.showImage = !this.showImage;
  }

  getProducts(): IProduct[]{
    return[
      {
        "productId": 1,
        "ProductName": "cream",
        "Price": 50,
        "imgUrl": "../assets/download.jpeg"
      },

      {
          "productId": 2,
          "ProductName": "soap",
          "Price": 40,
          "imgUrl": ""
      },
      {
        "productId": 3,
        "ProductName": "shampoo",
        "Price": 180,
        "imgUrl": ""
      },
      {
        "productId": 4,
        "ProductName": "spray",
        "Price": 70,
        "imgUrl": ""
      },
      {
        "productId": 5,
        "ProductName": "cream",
        "Price": 50,
        "imgUrl": ""
      }
    ]
  }

}
