import { Component, OnInit,Inject, ViewChild } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Pokemon } from 'src/app/models/Pokemon';
import {MatDialog} from '@angular/material/dialog';
import { PokeinfoComponent } from '../pokeinfo/pokeinfo.component';
import { FavoriteURL } from 'src/app/models/FavoriteURL';
import { PokemonService } from 'src/app/services/pokemon.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
  
})
export class PokedexComponent implements OnInit {
  @ViewChild(MatPaginator) paginator?: MatPaginator;

	constructor(private http: HttpClient, public dialog: MatDialog, 
   private readonly _service:PokemonService) {}
 
	listpokemon={} as any;
  pokemon={} as Pokemon;
  color:string='accent';
  tempFavoriteURL:FavoriteURL[]=[] as FavoriteURL[];
  temp={} as any;
  url:string="";
  dataSource = [] as any;


  ngOnInit() {
   
    this.dataSource = new MatTableDataSource(this.listpokemon);
		 this._service.GetPokemonList().subscribe(data => {
      this.listpokemon = data;
      this._service.AddList(data.results);
    });;
    console.log("inicio de pokedex");
    console.log(this.listpokemon);
    //displayedColumns = this.listpokemon.map(c => c.listapokemon.results);
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

  
  OnPageChange(event:PageEvent){
    console.log("entro a evento");
    this.dataSource.paginator = this.paginator;
  }
  
  ngAfterViewInit() {
    
  }

}
