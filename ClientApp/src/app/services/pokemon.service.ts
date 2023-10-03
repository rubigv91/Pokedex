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

  GetListByName(){
    return this.listpokemon;
    console.log("GetListbyName");
    console.log(this.listpokemon);
  }

  CheckFavoriteURL(link:string){
    
    var item = this.favoriteURL.find(u=>link==u);
    if (item){ 
      console.log("pokemon existente");
      
    }
    else {
      this.AddFavoriteURL(link);
      this.GetPokemonFavoriteList(link);
    }
  }

  GetPokemonFavoriteList(linkList:any){

    
      this.http.get(linkList).subscribe(u=>{ 
        this.listfavoritePokemon.push(u);
      });
    console.log(this.listfavoritePokemon);
  }

  AddList(NameList:any){
    this.listpokemon=NameList;
  }

  
}
