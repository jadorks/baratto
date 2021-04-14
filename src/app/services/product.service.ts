import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserService } from "./user.service";
import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;
const TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  token = '';

  baseURL = "https://barattorest.herokuapp.com/api/products";

  constructor(private http: HttpClient, private userService: UserService) { 
    this.loadToken();
  }

  public createProduct(formData){
    const httpOptions = {
      method: 'POST',
      headers: new HttpHeaders({
        Authorization: 'Token ' + this.token,
      }),
    };

    return this.http.post(this.baseURL + '/create/', formData, httpOptions).pipe(
      map((data: any) => console.log(data))
    );


  }

  async loadToken(){
    const tk = await Storage.get({ key: TOKEN_KEY });
    if(tk && tk.value){
      this.token = tk.value;
    }
  }

  public getProducts(): Observable<any> {
    return this.http.get(this.baseURL).pipe(
      map((data: any) => {
        return data.map((product) => new Product(product));
      })
    )
  }

  public getProduct(id: any): Observable<any> {
    return this.http.get(this.baseURL + '/view/' + id + '/').pipe(
      map((data: any) => {
        return new Product(data);
      }) 
    )
  }

  public getCategories(): Observable<any> {
    return this.http.get(this.baseURL + '/category/').pipe(
      map((data: any) => {
        return data.map((category) => new Category(category));
      })
    )
  }

  public getCategory(id: any): Observable<any> {
    return this.http.get(this.baseURL + '/category/' + id + '/').pipe(
      map((data: any) => {
        console.log(data);
        return new Category(data);
      })
    )
  }

  public getCategoryProducts(id: any): Observable<any> {
    return this.http.get(this.baseURL + '/category/' + id + '/products/').pipe(
      map((data: any) => {
        return data.map((product) => new Product(product));
      })
    )
  }

  public uploadImage(blobData, name, ext){
    const formData = new FormData();
    formData.append('file', blobData, `myimage.${ext}`);
    formData.append('name', name);
  }

  public uploadImageFile(file: File){
    const ext = file.name.split('.').pop();
    const formData = new FormData();
    formData.append('file', file, `myimage.${ext}`);
    formData.append('name', file.name);
  }

  public getUserProducts(): Observable<any> {
    
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Token ' + this.token,
      }),
    };

    return this.http.get(this.baseURL + '/users/products/', httpOptions).pipe(
      map((data: any) => {
        return data.map((product) => new Product(product));
      })
    )
  }

  public deleteUserProducts(id): Observable<any> {
    return this.http.delete(this.baseURL + '/delete/' + id + '/').pipe(
      map((data: any)=> console.log(data)),
    )
  }

  public editProduct(id, formData): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Token ' + this.token,
      }),
    };

    return this.http.put(this.baseURL + '/update/' + id + '/', formData, httpOptions).pipe(
      map((data: any) => console.log(data))
    );
  }
}

export class Product{

  id: any;

  name: any;
  
  price: any;

  description: any;

  image: any;

  user: any;

  constructor( values: Object = {} ) {
    Object.assign(this, values);
  }
}

export class Category{
  id: any;
  title: any;

  constructor( values: Object = {} ) {
    Object.assign(this, values);
  }
}
