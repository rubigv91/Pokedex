import { DataSource } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokesearch',
  templateUrl: './pokesearch.component.html',
  styleUrls: ['./pokesearch.component.css']
})
export class PokesearchComponent implements OnInit, AfterViewInit {
  
  listapokemon={} as any;
  pokemon={} as Pokemon;
  exampleDatabase={} as any;
  displayedColumns: string[] = [ 'name'];
  dataSource = [] as any;
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

   @ViewChild(MatPaginator) paginator?: MatPaginator;
   @ViewChild(MatSort) sort?: MatSort;

  constructor(private readonly _service:PokemonService) {}

  ngOnInit() {
    this.listapokemon = this._service.GetListByName();
    this.dataSource = new MatTableDataSource (this.listapokemon);   
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.paginator = this.paginator;
  }
}
