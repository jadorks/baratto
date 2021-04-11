import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = "http://127.0.0.1:8000/api/products";

  constructor(private http: HttpClient) { }

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
