import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/models/UserLogin';
import { Users } from 'src/app/models/Users';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
   equipos=['amarillo', 'rojo', 'azul'];
   usuario={} as Users;
   user={} as Users;
   loginConfirmation={} as boolean;
   

  constructor(private readonly _service:UserService) {
    
    
  }
  ngOnInit(): void {
    
  }

  
  login(temp:UserLogin){
    
    this._service.UserSent(temp).subscribe(u=>{
      
      if (this.user!=null){
        this.loginConfirmation=true;
        console.log("es un usuario");
        this._service.GetLogin(this.loginConfirmation);
        console.log(this._service.GetLogin); 

      }
      else{
        console.log("no es usuario");
        this.loginConfirmation=false;
        this._service.GetLogin(this.loginConfirmation);
        console.log(this._service.GetLogin); 

      }
    });


  } 

  

}


