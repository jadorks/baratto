import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from "@angular/router";
import { Product, ProductService } from "../../services/product.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {

  // default to pay with cash on launch
  // create vars that dynamically populate payment method scr...

  selected: any = {};
  paymentMethod: any = {};
  products: any = [];
  id: any;
  subTotal: any = 0;
  balance: any = 0;
  total: number = 0;

  order: any = {};
  reference: number= 0;

  couponForm: FormGroup;

  constructor(private fb: FormBuilder, private alertController: AlertController, private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.reference = Math.floor(Math.random() * 1000000000 + 1);
  }

  ngOnInit() {

  }

  ionViewWillEnter(){
    this.paymentMethod = {
      title: "Pay with Cash",
      price: null,
      image: "../../../assets/cash.png",
    }
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.getProduct(this.id).subscribe(
      result => {
        this.selected = result;
        this.subTotal = result.price;
        this.total = result.price;
      });
    this.productService.getUserProducts().subscribe((products: Product[]) => {
      this.products = products; 
    });
    this.calcTotal();
  }

  calcTotal(){
    if(this.paymentMethod.price){
      if(this.paymentMethod.price < this.subTotal){
        this.balance = this.subTotal - this.paymentMethod.price;
        this.total = this.balance;
      }
    }
    else{
      this.total = this.subTotal;
    }
  }

  calcInvoice(order) {
    let subTotal = 0;
    let total = 0;

    subTotal = order.items.reduce((acc, value) => acc + value.price, 0);
    total = subTotal + order.taxAmount + order.shipping;

    Object.assign(order, { subTotal }, { total });
  }

  applyCode() {
    if (this.couponForm.valid) {
      // do something
    } else {
      // do smething
    }
  }

  async choosePaymentMethod() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Payment Method',
      inputs: [
        {
          name: 'method',
          type: 'radio',
          label: 'Pay with Cash',
          value: 'cash',
          handler: () => {
            console.log('Pay with Cash');
          },
          checked: true
        },
        {
          name: 'method',
          type: 'radio',
          label: 'Direct Trade',
          value: 'trade',
          handler: () => {
            console.log('Direct Trade');
          }
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            if(data == "trade"){
              this.chooseProduct();
            }
            else if(data == "cash"){
              this.paymentMethod = {
                title: "Pay with Cash",
                price: data.price,
                image: "../../../assets/cash.png",
              }
              this.balance = 0;
              this.total = this.subTotal;
              console.log("No trade today sir.")
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async chooseProduct(){

    let options = [];

    for(let i=0; i<this.products.length; ++i){
      options.push({
        name: 'product',
        type: 'radio',
        value: this.products[i],
        label: this.products[i].title + " - GHC" + this.products[i].price,
        checked: i === 0,
      });
    }

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Choose Product',
      inputs: options,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            this.paymentMethod = {
              title: data.title,
              price: data.price,
              image: data.image,
            };
            this.calcTotal();
          }
        }
      ]
    });

    await alert.present();
  }

  paymentCancel(){
    console.log("Payment cancelled");
  }

  async paymentDone(ref: any){
    const alert = await this.alertController.create({
      header: 'Offer Successful',
      message: 'Your offer has been sent.',
      buttons: ['OK'],
    });

    await alert.present();
    
    this.router.navigateByUrl('/tabs/home');
  }

}
