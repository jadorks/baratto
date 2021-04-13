import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from '@ionic/angular';
import { ProductService } from "../../services/product.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {

  imgConfig = {
    spaceBetween: 3,
    slidesPerView: 1,
    centeredSlides: true
  };

  relatedConfig = {
    spaceBetween: 2,
    slidesPerView: 2,
  };

  product: any = {};
  id: any;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router, 
              private alertController: AlertController, private loadingController: LoadingController) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ionViewWillEnter(){
    this.productService.getProduct(this.id).subscribe(
      result => {
        this.product = result;
      }
    )
  }

  ngOnInit() {
  }

  async deleteProduct(){
    const alert = await this.alertController.create({
      header: 'Danger!',
      message: 'Do you want to delete this product?',
      buttons: ['Cancel', { text: 'OK', handler: (e) => this.confirmDelete()}]
    })


    await alert.present();

  }

  async confirmDelete(){

    const loading = await this.loadingController.create();
    await loading.present();

    this.productService.deleteUserProducts(this.product.id).subscribe(

      async (res) => {
        await loading.dismiss();

        const alert = await this.alertController.create({
          header: 'Deleted',
          message: 'Your product has been deleted.',
          buttons: ['OK'],
        });

        await alert.present();
        this.router.navigateByUrl('/user-catalog');

      },
      async (res) => {
        await loading.dismiss();
        // show all values in the error object...map
        const alert = await this.alertController.create({
          header: 'Delete failed',
          message: 'Failed to delete product',
          buttons: ['OK'],
        });

        await alert.present();

      }
      )}

}
