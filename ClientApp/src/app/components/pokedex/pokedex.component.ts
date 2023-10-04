import { Component, OnInit,Inject, ViewChild, AfterViewInit } from '@angular/core';
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
export class PokedexComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  p:number=1;
  listpokemon={} as any;
  listapokemon={} as any;
  pokemon={} as Pokemon;
  color:string='accent';
  tempFavoriteURL:FavoriteURL[]=[] as FavoriteURL[];
  temp={} as any;
  url:string="";
  dataSource = [] as any;
  displayedColumns: string[] = [ 'name'];

  constructor(private http: HttpClient, public dialog: MatDialog,
    private readonly _service: PokemonService) { }

  ngOnInit() {    
		 this._service.GetPokemonList().subscribe(data => {
      this.listpokemon = data;
      this.dataSource = new MatTableDataSource(this.listpokemon);
      this._service.AddList(data.results);
     
    });

    this.listapokemon = this._service.GetListByName();
    this.dataSource = new MatTableDataSource (this.listapokemon);          
   // this.displayedColumns = this.listpokemon.MatPaginator();
  }
  favoritear(link:string){
    this._service.CheckFavoriteURL(link);
     }

  getPokemonByURL(url:string){
      this._service.url=url;
       this.dialog.open(PokeinfoComponent, { height:'600px',
         data:url      
        });
  }

  OnPageChange(event:PageEvent){
    //this.dataSource.paginator = this.paginator;
  }
  
  ngAfterViewInit() {
    console.log("after de pokedex");    
    //this.dataSource.paginator = this.paginator;    
  }

}
