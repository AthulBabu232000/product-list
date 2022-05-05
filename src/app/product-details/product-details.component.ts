import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { CartService } from "../cart.service";
import { Product, products } from "../products";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  product?: Product;
  index: number = 0;

  constructor(private route: ActivatedRoute, private cartService: CartService) {
    this.route.params.subscribe((params: Params) => {
      this.index = params["productId"];

      this.product = products.find((p) => p.id == this.index);
    });
  }
  addToCart(product:Product){
    this.cartService.addToCart(product);
    window.alert("your cart is added");
    
  }

  ngOnInit(): void {}
}
