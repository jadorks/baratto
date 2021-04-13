import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ActionSheetController, AlertController, LoadingController, Platform } from "@ionic/angular";
import { ProductService, Category } from "../../services/product.service";
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";
import { ActivatedRoute } from '@angular/router';
const { Camera } = Plugins;

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
})
export class EditProductPage implements OnInit {

  editForm: FormGroup;
  id: any;
  categories: Category[] = [];
  formData: FormData;
  product: any = {}

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private plt: Platform,
    private actionSheetController: ActionSheetController,
    private activatedRoute: ActivatedRoute
  ) { 
    this.formData = new FormData();
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.editForm = new FormGroup({
      'productName': new FormControl(null, []),
      'price': new FormControl(null, []),
      'description': new FormControl(null, []),
    });
  }

  ionViewWillEnter(){
    this.productService.getProduct(this.id).subscribe(
      result => {
        this.product = result;
        this.productName.setValue(this.product.title);
        this.price.setValue(this.product.price);
        this.description.setValue(this.product.description);
      }
    )


  }

  async submitProduct(){
    this.formData.append("title", this.productName.value);
    this.formData.append("price", this.price.value);
    this.formData.append("description", this.description.value);

    const loading = await this.loadingController.create();
    await loading.present();
    
    this.productService.editProduct(this.product.id, this.formData).subscribe(
      async (res) => {
        await loading.dismiss();
        
        const alert = await this.alertController.create({
          header: 'Listing Edited',
          message: 'Your product listing has been edited',
          buttons: ['OK'],
        });

        await alert.present();
      },
      async (res) => {
        await loading.dismiss();

        const alert = await this.alertController.create({
          header: 'Listing Edit Failed',
          message: 'Failed to edit product listing',
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

  get productName(){
    return this.editForm.get('productName')
  }

  get price(){
    return this.editForm.get('price')
  }

  get description(){
    return this.editForm.get('description')
  }
}
