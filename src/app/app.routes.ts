import { Routes } from '@angular/router';

export const routes: Routes = [
      {path:"",redirectTo:"home",pathMatch:"full"},
      {
        path:"home",loadComponent:()=> import('../pages/home/home/home.component').then(c=>c.HomeComponent),
      }
,
       {
        path:"prodectdetails/:id",loadComponent:()=> import('../pages/prodectdetails/prodectdetails.component').then(c=>c.ProdectdetailsComponent),
      }
      

];
