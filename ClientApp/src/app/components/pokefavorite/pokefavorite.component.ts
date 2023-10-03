import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { FavinfoComponent } from '../favinfo/favinfo.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-pokefavorite',
  templateUrl: './pokefavorite.component.html',
  styleUrls: ['./pokefavorite.component.css']
})
export class PokefavoriteComponent implements OnInit, AfterViewInit {
  listFavPokemon={} as any;
  listFavPokemonSkills=[] as any;
  pokemon={} as Pokemon;
  exampleDatabase={} as any;
  displayedColumns: string[] = [ 'name'];
  
  dataSource = [] as any;

  resultsLength = this.listFavPokemon.lenght;
  isLoadingResults = true;
  isRateLimitReached = false;

   @ViewChild(MatPaginator) paginator?: MatPaginator;
   @ViewChild(MatSort) sort?: MatSort;

  constructor(private readonly _service:PokemonService,  public dialog: MatDialog, ) {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.listFavPokemon = this._service.favoriteURL;
    this.listFavPokemonSkills = this._service.listfavoritePokemon;    
    
    this.dataSource = new MatTableDataSource (this.listFavPokemonSkills);
  }

  applyFilter(event: Event) {
    
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource.filter);
    
  }

  getPokemonInfo(item:any) {
    this.dialog.open(FavinfoComponent, {
      data: {
        item },
    });
  }
  refresh(){
    console.log("refresh")
  }
}
