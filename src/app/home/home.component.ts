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

  constructor(private dataService: DataService) {

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

  addItem(id: any){
    console.log("additem");
    let item = this.myData.filter((x: any) => x.id == id)[0];
    this.likedItems.has(item) ? this.likedItems.delete(item) : this.likedItems.add(item);
    console.log(this.likedItems);
  }

}
