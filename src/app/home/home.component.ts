import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Data } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  myData: any;
  searchText: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

    this.dataService.getData().subscribe((data) => {
      this.myData = data;
      console.log(this.myData);
      this.dtTrigger.next(data);
    });
    this.LoadInvoice();

  }
  LoadInvoice() {
    this.dtTrigger.next(null);
  }

}

