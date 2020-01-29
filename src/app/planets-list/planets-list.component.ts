import { Component, OnInit } from '@angular/core';
import { PalnetsServiceService } from '../palnets-service.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {

  public planetService:PalnetsServiceService;

  constructor(planetService:PalnetsServiceService) {
    this.planetService=planetService;
   }

  ngOnInit() {
    this.planetService.addPlanets("Example planet created when this component is created")
  }
}
