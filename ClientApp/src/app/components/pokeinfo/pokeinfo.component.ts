import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { PokedexComponent } from '../pokedex/pokedex.component';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from 'src/app/models/Pokemon';

@Component({
  selector: 'app-pokeinfo',
  templateUrl: './pokeinfo.component.html',
  styleUrls: ['./pokeinfo.component.css'],
  
  
})
export class PokeinfoComponent implements OnInit{

  poke={} as Pokemon;
  listSkills={} as any;

  constructor(private http: HttpClient,@Inject(MAT_DIALOG_DATA) public data:PokedexComponent) {}
  ngOnInit(){
    console.log(this.data)
    this.http
    .get<any>("https://pokeapi.co/api/v2/pokemon/"+this.data).subscribe(p => {
    this.listSkills=p;
      console.log(this.listSkills);
    });
    
  }

}
