import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    myData: any;
    item: any;
    id: any;

    constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) {
    }

    getItem(id: any) {
        console.log(id);
        console.log(this.myData);
        let item = this.myData.filter((x: any) => x.id == id)[0];
        console.log(item);
        return item;
    }

    setItem(): void {
        this.activatedRoute.paramMap.subscribe((params) => {
            this.id = params.get('id');
            console.log(this.id)
        });
        this.item = this.getItem(this.id);
    }

    ngOnInit(): void {
        var flag = this.dataService.retrieveData();

        if (flag == undefined) {
            //fetch the data
            this.dataService.getData().subscribe((data: any) => {
                this.dataService.setData(data);
                this.myData = data;
                console.log('fetched: ', this.myData);
                this.setItem();
            });
        } else {
            //already fetched-> just retrieve it. maybe fix so we dont have to refetch upon refresh
            this.myData = this.dataService.retrieveData();
            console.log('retrieved: ', this.myData);
            this.setItem();
        }

    }
}