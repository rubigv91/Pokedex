import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { PokedexComponent } from '../pokedex/pokedex.component';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from 'src/app/models/Pokemon';
import { Tile } from 'src/app/models/Tile';
import { PokemonService } from 'src/app/services/pokemon.service';


@Component({
  selector: 'app-pokeinfo',
  templateUrl: './pokeinfo.component.html',
  styleUrls: ['./pokeinfo.component.css'],
  
  
})
export class PokeinfoComponent implements OnInit{

  poke={} as Pokemon;
  listSkills={} as any;


  constructor(private _service: PokemonService,@Inject(MAT_DIALOG_DATA) public data:PokedexComponent) {}
  ngOnInit(){
    
    this._service.GetPokemonSkills().subscribe( u=>{this.listSkills=u; console.log(this.listSkills)});
    
  }

}
