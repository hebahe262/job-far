import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products/products.service';
import { prod } from '../../core/prod/prod';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prodectdetails',
  imports: [],
  templateUrl:'./prodectdetails.component.html',
  styleUrl: './prodectdetails.component.css'
})
export class ProdectdetailsComponent implements OnInit {
private readonly _activatedRoute = inject(ActivatedRoute);//deh aly bts7ably el kemah mn fo2 xy id

private readonly _productsService = inject(ProductsService)
 prodect!:prod[];
 detailsproduct: prod ={} as prod;
productId!:any;


ngOnInit(): void {

  this.getDetailsProduct('id')
    
}

 getDetailsProduct(id:string):void{
  // this._productsService.showDetalsProducts(id).subscribe({
  //   next:(res)=>{
  //     console.log(res);
  //     this.prodect=res
  //   }
  // })

  this._activatedRoute.paramMap.subscribe({
    next:(res)=>{
      console.log(this.productId);
      this.productId = res.get("id");
      this._productsService.showDetalsProducts(this.productId).subscribe({
        next:(res)=>{
      console.log(res);
      this.detailsproduct=res;
     
    }
      })
    },

  })
 }
}
