import { Component, OnInit,Inject } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Pokemon } from 'src/app/models/Pokemon';
import {MatDialog} from '@angular/material/dialog';
import { PokeinfoComponent } from '../pokeinfo/pokeinfo.component';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
  
})
export class PokedexComponent implements OnInit {
	constructor(private http: HttpClient, public dialog: MatDialog) {}
 
	listpokemon={} as any;
  pokemon={} as Pokemon;

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

  favoritear(name:string){
    console.log(name);

     }

  masInfo(name:string){
      this.dialog.open(PokeinfoComponent, {
        data:name      
       });

  }

  
}
