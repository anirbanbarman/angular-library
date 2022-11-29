import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapLibService {
  private map=new Map()

  constructor() { }

  log(message:string){
    console.log(message)
  }
set(key:any,value:any){
this.map.set(key, value)
}
get(key:any){
  return this.map.get(key)

}
has(key:any){
  return this.map.has(key)
}
delete(key:any){
  this.map.delete(key) 
}
clear(){
  this.map.clear()
}
size(){
  return this.map.size;
}
  



}
