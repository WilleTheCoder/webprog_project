import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  myData:any;
  searchText: any;
  constructor(private dataService: DataService) {
    
   }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.myData=data;
      console.log(this.myData);
    });
      
  }
  

  }

