import { Component, OnInit } from '@angular/core';
import { PalnetsServiceService } from '../palnets-service.service';

@Component({
  selector: 'app-planets-create',
  templateUrl: './planets-create.component.html',
  styleUrls: ['./planets-create.component.css']
})
export class PlanetsCreateComponent implements OnInit {

  public planetService:PalnetsServiceService;

  constructor(planetService:PalnetsServiceService) {
    this.planetService=planetService;
   }

  ngOnInit() {
  }

  addPlanet(value: string){
    this.planetService.addPlanets(value);
  };
}
