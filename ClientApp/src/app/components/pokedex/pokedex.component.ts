import { Component, OnInit,Inject } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Pokemon } from 'src/app/models/Pokemon';
import {MatDialog} from '@angular/material/dialog';
import { PokeinfoComponent } from '../pokeinfo/pokeinfo.component';
import { FavoriteURL } from 'src/app/models/FavoriteURL';
import { PokemonService } from 'src/app/services/pokemon.service';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
  
})
export class PokedexComponent implements OnInit {
	constructor(private http: HttpClient, public dialog: MatDialog, 
    private readonly _service:PokemonService) {}
 
	listpokemon={} as any;
  pokemon={} as Pokemon;
  color:string='accent';
  tempFavoriteURL:FavoriteURL[]=[] as FavoriteURL[];
  temp={} as any;
  url:string="";
  

  ngOnInit() {
   
		 this._service.GetPokemonList().subscribe(data => {
      this.listpokemon = data;
      console.log(this.listpokemon);
    });;
  }

  

  favoritear(link:string){

    this._service.CheckFavoriteURL(link);

     }

  getPokemonByURL(url:string){
      this._service.url=url;
    
       this.dialog.open(PokeinfoComponent, { height:'50%',
         data:url      
        
        });

  }

  
}
