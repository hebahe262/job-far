
import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../../../core/services/products/products.service';
import { prod } from '../../../../core/prod/prod';
import { SearchpipPipe } from '../../../../core/pipes/searchpip.pipe';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productsa',
  imports: [SearchpipPipe,FormsModule,RouterLink],
  templateUrl: './productsa.component.html',
  styleUrl: './productsa.component.css'
})
export class ProductsaComponent implements OnInit {

  private readonly  _productsService = inject(ProductsService);
   prodect!:prod[];
  originalProducts!:prod[] 
    text:string="";



  //    filteredProducts: any[] = [];
  // searchTerm: string = '';
  sortBy: string = '';


ngOnInit(): void {
    this.getProduct();
    
}

  getProduct():void{
    this._productsService.showProducts().subscribe({
      next:(res)=>{
        console.log(res);
        this.prodect=res;
        this.originalProducts =res;
         this.originalProducts = [...res];

         
      },
      
    })

  };



  filterProducts(): void {
    
    if (this.sortBy === '') {
    this.prodect = [...this.originalProducts]; 
    return;
  }

    this.prodect = this.prodect.sort((a, b) => {
      switch (this.sortBy) {
        case 'priceLow':
          return a.price - b.price
        case 'priceHigh':
          return b.price - a.price;
        case 'nameAZ':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });
   
  }

}
