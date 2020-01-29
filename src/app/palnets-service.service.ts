import { Injectable } from '@angular/core';
import { Planet } from './planet';

@Injectable({
  providedIn: 'root'
})
export class PalnetsServiceService {

  public planets:Planet[]=[];

  constructor() { }


  addPlanets(planetName:string) {
    this.planets.push(new Planet(planetName, false));
  };

  removePlanets(planetName:string){
    this.planets.splice
  }
  sortPlanets(){};  
}
