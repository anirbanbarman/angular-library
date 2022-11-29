import { Component } from '@angular/core';
import { MapLibService } from 'map-lib';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  constructor(private mapService:MapLibService){
   console.log(this.mapService.get("name"))
  

  }

}
