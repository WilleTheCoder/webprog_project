# Docs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## Commands and guides

### Install Angular CLI command line interface:
    npm -i -g @angular/cli

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

initiate a new angular project using CSS styling

    npm install --save bootstrap jquery

edit the angular.json file and replace styles and scripts under the build target with:

    "styles": [
      "src/styles.css", 
        "node_modules/bootstrap/dist/css/bootstrap.min.css"
      ],
      "scripts": [
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.min.js"
      ]



https://www.smashingmagazine.com/2019/02/angular-application-bootstrap/
