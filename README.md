# Docs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## Commands and guides

### Install Angular CLI command line interface:
    npm install -g @angular/cli

### Check version of ng:
    ng v

### Start new project:
    ng new hello-world

### Start program on server: Navigate to `http://localhost:4200/`
    ng serve
    
or

    npm start

### Generate new component:
    ng generate component components/componentname

---
## Adding Bootstrap to Angular

### initiate a new angular project using CSS styling

    npm install --save bootstrap jquery

### edit the angular.json file and replace styles and scripts under the build target with:

    "styles": [
      "src/styles.css", 
        "node_modules/bootstrap/dist/css/bootstrap.min.css"
      ],
      "scripts": [
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.min.js"
      ]



https://www.smashingmagazine.com/2019/02/angular-application-bootstrap/

---
## Sharing data between component with shared services

### Create a data.service.ts file in app dir and create setters and getters

        %ng generate service data

        import { Injectable } from '@angular/core';

        @Injectable({
        providedIn: 'root'
        })
        export class DataService {
        private myData: any;

        setData(data: any) {
            this.myData = data;
        }

        getData() {
            return this.myData;
        }
        }


### In parent component import dataservice and set the data.

    import { DataService } from '../data.service';

    constructor(private dataService: DataService) {}

    // Fetch JSON data and set it in the data service
    this.dataService.setData(data);

### In child component retrieve the data

    import { DataService } from '../data.service';

    constructor(private dataService: DataService) {}

    ngOnInit() {
        // Retrieve the data from the data service
        this.data = this.dataService.getData();
    }