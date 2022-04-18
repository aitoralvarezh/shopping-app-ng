import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {
  HeaderComponent,
  NotFoundComponent
} from './';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports:[
    HeaderComponent,
    NotFoundComponent
  ]
})
export class UiModule { }
