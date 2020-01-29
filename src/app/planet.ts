export class Planet{
    planetName:string;
    planetMoons:number;
    planetDistancefromSun:number;
    completed:boolean;
  
    constructor(planetName:string, completed:boolean){
      this.planetName=planetName;
      this.completed=completed;
    }
  }