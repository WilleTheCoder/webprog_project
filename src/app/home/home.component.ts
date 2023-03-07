import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Data } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { Subject } from 'rxjs';
import { MaterialIcon } from 'material-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  myData: any;
  searchText: any;
  likedItems = new Set();
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  showSaved: boolean = false;
  favorites: any = [];

  constructor(private dataService: DataService) {
  }

  addToFavorites(item: any){
    if (!this.favorites.includes(item)) {
      console.log("pushing");
      this.favorites.push(item);
    }
  }

  isActive(item: any){
    return this.favorites.includes(item);
  }

removeFromFavorites(id: any) {
  const index = this.favorites.indexOf(id);
  if (index !== -1) {
    this.favorites.splice(index, 1);
    this.favorites = [...this.favorites]; 
  }
}

  toggleFavorite(item: any) {

    console.log("toggling");
    
    if (this.favorites.includes(item)) {
      this.removeFromFavorites(item);
    } else {      
      this.addToFavorites(item);
    }

    this.showSaved = (this.favorites.length > 0) ? true : false; 

  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    };

    this.dataService.getData().subscribe((data) => {
      this.myData = data;
      this.dataService.setData(data)
      console.log(this.myData);
      this.dtTrigger.next(data);
    });


  }
  LoadInvoice() {
    this.dtTrigger.next(null);
  }


}
