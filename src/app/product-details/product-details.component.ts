import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product?:Product;
  index:number=0;

  constructor(private route:ActivatedRoute) {
  this.route.params.subscribe((params:Params)=>{
      this.index=params['productId'];
    
     this.product=products.find(p=>p.id==this.index);
    });
   }

  ngOnInit(): void {
   
  }

}
