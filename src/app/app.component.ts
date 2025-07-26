import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from '../core/services/flowbite/flowbite.service';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from "../layouts/navbar/navbar/navbar.component";
import { ProductsaComponent } from "../pages/home/home/products/productsa.component";
import { FooterComponent } from "../layouts/footer/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ProductsaComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'products';

  
    constructor(private FlowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.FlowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }
}
