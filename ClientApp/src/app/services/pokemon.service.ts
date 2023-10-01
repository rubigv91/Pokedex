import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokedexComponent } from '../components/pokedex/pokedex.component';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  listpokemon={} as any;
  listSkills:any;
  url:string="";
  favoriteURL:string[]=[] as string[] ;
  listfavoritePokemon:any[]=[] as any[] ;

  constructor(private readonly http:HttpClient) { 

  }
  GetPokemonList(){
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon?offset=0&limit=150%22');
  }


  GetPokemonSkills(){    
    return this.http.get(this.url);   
  }

  AddFavoriteURL(link:string){
    this.favoriteURL.push(link);
  }
  GetFavoriteURL(){
    return this.favoriteURL;
  }

  CheckFavoriteURL(link:string){
    
    var item = this.favoriteURL.find(u=>link==u);
    if (item){ 
      console.log("pokemon existente");
    }
    else {
      this.AddFavoriteURL(link);
      console.log("pokemon nuevo")
    }
  }

  GetPokemonFavoriteList(linkList:any){

    linkList.forEach((value:string,index:number) => {
      this.http.get(value).subscribe(u=>{ 
        this.listfavoritePokemon.push(u);
      });
      });

    
  }

  AddList(NameList:any){
    this.listpokemon=NameList;
  }
}
