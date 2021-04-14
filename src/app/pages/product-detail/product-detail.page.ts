import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Product, ProductService } from "../../services/product.service";
import { User, UserService } from "../../services/user.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  notOwner: boolean = true;
  currentUser: string = "";
  productUser: string = "";


  imgConfig = {
    spaceBetween: 3,
    slidesPerView: 1,
    centeredSlides: true
  };

  relatedConfig = {
    spaceBetween: 2,
    slidesPerView: 2,
  };

  user: any = {};
  product: any = {};
  id: any;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private userService: UserService) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    
    this.productService.getProduct(this.id).subscribe(
      result => {
        this.product = result;
        this.productUser = this.product.user;
        this.userService.getProfile().subscribe(
          result => {
            this.user = result[0];
            this.currentUser = this.user.username;
            console.log(this.currentUser);
            console.log(this.productUser);
            if(this.currentUser == this.productUser){
              console.log("You are owner");
              this.notOwner = false;
            }
          }
        )
      });
  
  }

}
