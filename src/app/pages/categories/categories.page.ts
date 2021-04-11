import { Component, OnInit } from '@angular/core';
import { Category, ProductService } from "../../services/product.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  categories: Category[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.productService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
    })
  }

}
