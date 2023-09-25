import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/Users';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

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
