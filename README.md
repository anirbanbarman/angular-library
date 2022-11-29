# AngularLibrary

Angular version 15.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## use

# code

in `app.module.ts ` component register the `MapLibModule` module

```

  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapLibModule
  ],

```
### Set the data

in `app.component.ts ` component inject  `MapLibService` service


```
constructor(private mapService:MapLibService){
    this.mapService.set("name","anirban")
  

  }

```


### get the data



in `child.component.ts ` component inject  `MapLibService` service


```
constructor(private mapService:MapLibService){
   console.log(this.mapService.get("name"))
  

  }


```


### that is all 

# happy to help


