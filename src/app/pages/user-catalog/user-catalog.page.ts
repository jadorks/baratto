import { Component, OnInit} from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
import { Product, ProductService } from "../../services/product.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user-catalog',
  templateUrl: './user-catalog.page.html',
  styleUrls: ['./user-catalog.page.scss'],
})
export class UserCatalogPage implements OnInit {

  layout = 'grid';

  products: any = []
  length: number = 0

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.productService.getUserProducts().subscribe((products: Product[]) => {
      this.products = products; 
      this.length = this.products.length;
    });
  }

  changeView(param) {
    switch (param) {
      case 'grid':
        this.layout = 'grid';
        break;
      case 'card':
        this.layout = 'card';
        break;
      default:
        this.layout = 'grid';
        break;
    }
  }

}
