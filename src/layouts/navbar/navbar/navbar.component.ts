import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

togelDekMood(){
  
  if(localStorage.getItem('theam') =='dark') {
  document.documentElement.classList.remove('dark');
  document.body.classList.add('bg-white')
    document.body.classList.remove('bg-black')
  localStorage.setItem('theam','light')
  }

  else{
    document.documentElement.classList.add('dark');
  document.body.classList.remove('bg-white')

     document.body.classList.add('bg-black')
     localStorage.setItem('theam','dark')
  }
}

}
