import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { LikeButtonComponent } from './like-button/like-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { LikedComponent } from './liked/liked.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SearchFilterPipe,
    LikeButtonComponent,
    LikedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
