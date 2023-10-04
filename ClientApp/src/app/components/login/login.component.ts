import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/models/UserLogin';
import { Users } from 'src/app/models/Users';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  equipos = ['amarillo', 'rojo', 'azul'];
  usuario = {} as Users;
  user = {} as Users;
  loginConfirmation = {} as boolean;


  constructor(private readonly _service: UserService, private router: Router) {


  }
  ngOnInit(): void {

  }


  login(temp: UserLogin) {

    this._service.GetUser(temp).subscribe(u => {
      console.log(u);
      this._service.GetLogin(u);
      if (this._service.GetLoginConfirmation()) this.router.navigate(['/', 'pokedex']);

    });




  }



}


