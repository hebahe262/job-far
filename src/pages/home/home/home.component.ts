import { Component } from '@angular/core';
import { ProductsaComponent } from "./products/productsa.component";

@Component({
  selector: 'app-home',
  imports: [ProductsaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
