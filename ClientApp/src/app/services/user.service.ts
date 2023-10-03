import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from 'src/app/models/UserLogin';
import { Users } from 'src/app/models/Users';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loginConfirmation:boolean= false;



  constructor(private readonly httpClient: HttpClient) {}


   GetUser(item:UserLogin) {
    let params= new HttpParams();
    params=params.append('email',item.email);
    params=params.append('pwd',item.pwd);
    return this.httpClient.get<boolean>("https://localhost:7132/api/Users/ReadLogin",{params});
    
    
   }

   UserAdd(u:Users){
    return this.httpClient.post("https://localhost:7132/api/Users/Add",u);
   }

   
  GetLogin(confirmation:boolean){
    
    if (confirmation){

      this.loginConfirmation=true;
    }
  
    return 
  
  }

  GetLoginConfirmation(){
    return this.loginConfirmation;
  }

}
