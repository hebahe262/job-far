import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpClient:HttpClient) { };


   showProducts():Observable<any>{
   return this._httpClient.get(`https://fakestoreapi.com/products`)
  }

   showDetalsProducts(id:string):Observable<any>{
   return this._httpClient.get(`https://fakestoreapi.com//products/${id}`)
  }

}
