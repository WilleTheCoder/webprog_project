import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { errorComponent } from './components/error/error.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'Karta', component: MapComponent},
    { path: '**', component: errorComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
