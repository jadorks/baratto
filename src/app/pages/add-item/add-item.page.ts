import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ActionSheetController, AlertController, LoadingController, Platform } from "@ionic/angular";
import { ProductService, Category } from "../../services/product.service";
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";
const { Camera } = Plugins;

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {

  productForm: FormGroup;
  blob: any;
  categories: Category[] = [];
  formData: FormData;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private plt: Platform,
    private actionSheetController: ActionSheetController
  ) { 
    this.formData = new FormData();
  }

  ngOnInit() {
    this.productForm = new FormGroup({
      'productName': new FormControl(null, []),
      'price': new FormControl(null, []),
      'description': new FormControl(null, []),
      'chosenCat': new FormControl(null, []),
    });
  }

  ionViewWillEnter(){
    this.productService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
    })
  }

  get productName(){
    return this.productForm.get('productName')
  }

  get price(){
    return this.productForm.get('price')
  }

  get description(){
    return this.productForm.get('description')
  }

  get category(){
    return this.productForm.get('chosenCat')
  }

  async submitProduct(){
    this.formData.append("title", this.productName.value);
    this.formData.append("price", this.price.value);
    this.formData.append("description", this.description.value);
    this.formData.append("category", this.category.value);

    const loading = await this.loadingController.create();
    await loading.present();
    
    this.productService.createProduct(this.formData).subscribe(
      async (res) => {
        await loading.dismiss();
        
        const alert = await this.alertController.create({
          header: 'New Product Created',
          message: 'Your product has been created',
          buttons: ['OK'],
        });

        await alert.present();
      },
      async (res) => {
        await loading.dismiss();

        const alert = await this.alertController.create({
          header: 'Product Creation Failed',
          message: 'Failed to create product',
          buttons: ['OK'],
        });

        await alert.present();
      }

    )
  }

  async chooseOrTakePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      //source: CameraSource.Camera
    }).catch((error)=>{
      console.log(error)
    })
    // variable image should contain our base64 image
    if (image){
      // convert base64 image to blob
      let blob = this.b64toBlob(image.base64String)
      
      //Generate a fake filename
      let name =Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 10);
      this.formData.append('image', blob, name+`.${image.format}`);
    }
  }

  public b64toBlob(b64Data, contentType = '', sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
 
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
 
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
 
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
 
    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

}
