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


## `MapLibService` service details
```

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapLibService {
  private map = new Map()

  constructor() { }

 
  set(key: any, value: any) {
    this.map.set(key, value)
  }
  get(key: any) {
    return this.map.get(key)

  }
  has(key: any) {
    return this.map.has(key)
  }
  delete(key: any) {
    this.map.delete(key)
  }
  clear() {
    this.map.clear()
  }
  size() {
    return this.map.size;
  }




}


```


### that's all 






# happy to help


