import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any; 

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://polisen.se/api/events')
  }

  setData(data: any){
    this.data = data
  }

  retrieveData(){
    return this.data;
  }

}
