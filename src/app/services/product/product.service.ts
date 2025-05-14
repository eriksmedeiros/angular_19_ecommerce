import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getCategory() {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORIES);
  }

  getProducts() {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCTS);
  }

  saveProduct(productObj: any) {
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.CREATE_PRODUCT, productObj);
  }
}
