import { Component, OnInit,Inject } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Pokemon } from 'src/app/models/Pokemon';
import {MatDialog} from '@angular/material/dialog';
import { PokeinfoComponent } from '../pokeinfo/pokeinfo.component';
import { FavoriteURL } from 'src/app/models/FavoriteURL';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
  
})
export class PokedexComponent implements OnInit {
	constructor(private http: HttpClient, public dialog: MatDialog) {}
 
	listpokemon={} as any;
  pokemon={} as Pokemon;
  color:string='accent';
  listFavoriteURL:List<FavoriteURL>=[] as FavoriteURL[];
  ngOnInit() {
   
		 this.http
			.get<any>('https://pokeapi.co/api/v2/pokemon?offset=0&limit=25%22').subscribe(data => {
        this.listpokemon = data;
        console.log(this.listpokemon);
      });
  }

  siguiente(){
    this.http.get<any>(this.listpokemon.next).subscribe(data=>{
      this.listpokemon=data;
      console.log(this.listpokemon);
    });
  }

  atras(){
    this.http.get<any>(this.listpokemon.previous).subscribe(data=>{
      this.listpokemon=data;
      console.log(this.listpokemon);
    });
  }

  favoritear(name:any){
    console.log(name);
    this.listFavoriteURL.AddList(name);
     
     }

  masInfo(name:string){
      this.dialog.open(PokeinfoComponent, { height:'50%',
        data:name      
       });

  }

  

changeColor() {
  
}
  
}
