import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

togelDekMood(){
  
  if(localStorage.getItem('hmada') =='dark') {
document.documentElement.classList.remove('dark');
  localStorage.setItem('hmada','light')
  }

  else{
    document.documentElement.classList.add('dark');
  localStorage.setItem('hmada','dark')
  }
}

}
