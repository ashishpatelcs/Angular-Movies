import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DeferLoadModule } from '@trademe/ng-defer-load';
import { NgxPaginationModule } from './pagination-controls/pagination.module';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, DeferLoadModule, NgxPaginationModule ],
  declarations: [ AppComponent, MoviesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
