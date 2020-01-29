import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { PlanetsCreateComponent } from './planets-create/planets-create.component';
import { PlanetsDetailComponent } from './planets-detail/planets-detail.component';
import {PalnetsServiceService } from '././palnets-service.service';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsListComponent,
    PlanetsCreateComponent,
    PlanetsDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PalnetsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
