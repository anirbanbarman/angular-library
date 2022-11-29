import { Component } from '@angular/core';
import { MapLibService } from 'map-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-library';
 

  constructor(private mapService:MapLibService){
    this.mapService.set("name","anirban")
  

  }
}
