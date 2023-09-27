import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from 'src/app/models/UserLogin';
import { Users } from 'src/app/models/Users';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:Users={}  as Users;

  constructor(private readonly httpClient: HttpClient) {}

   UserSent(item:UserLogin) {
    return this.httpClient.post<Users>("https://localhost:7132/api/Users/ReadLogin",item);
    
    
   }

}