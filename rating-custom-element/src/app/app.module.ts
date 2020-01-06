import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RatingComponent } from './rating.component';

@NgModule({
  declarations: [
    RatingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RatingComponent]
})
export class AppModule { }
