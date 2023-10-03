import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokeinfoComponent } from './components/pokeinfo/pokeinfo.component';
import { PokefavoriteComponent } from './components/pokefavorite/pokefavorite.component';
import { PokesearchComponent } from './components/pokesearch/pokesearch.component';

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSortModule} from '@angular/material/sort';
import { FavinfoComponent } from './components/favinfo/favinfo.component';
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    LoginComponent,
    SignupComponent,
    PokedexComponent,
    PokeinfoComponent,
    PokefavoriteComponent,
    PokesearchComponent,
    FavinfoComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTooltipModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatGridListModule,
    NgxPaginationModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: PokesearchComponent, pathMatch: 'full' },
      { path: 'favorite', component: PokefavoriteComponent, canActivate:[AuthGuard]},
      { path: 'search', component: PokesearchComponent,canActivate:[AuthGuard]},
      { path: 'signup', component: SignupComponent},
      { path: 'login', component: LoginComponent},
      { path: 'pokedex', component: PokedexComponent,canActivate:[AuthGuard]},


    ])
  ],
  providers: [AuthGuard],

  bootstrap: [AppComponent]
})
export class AppModule { }
