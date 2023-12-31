import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/Users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  equipos=['amarillo', 'rojo', 'azul'];
  usuario={} as Users;

 constructor(private readonly _service:UserService, private router: Router) {
   
   
 }
 ngOnInit(): void {
   
 }

 addUser(item:Users){
   this.usuario=item;
   this._service.UserAdd(this.usuario).subscribe();
   this.router.navigateByUrl('/');
 }

 
}
