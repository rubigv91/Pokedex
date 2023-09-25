import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/Users';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
   equipos=['amarillo', 'rojo', 'azul'];
   usuario={} as Users;

  constructor() {
    
    
  }
  ngOnInit(): void {
    
  }

  mostrar(item:Users){
    this.usuario=item;
    console.log(this.usuario)

  }

  

}


