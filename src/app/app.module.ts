import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RandomPictureComponent } from './random/random-picture/random-picture.component';
import { RandomFactComponent } from './random/random-fact/random-fact.component';

import { FactService } from './services/fact.service';
import { PictureService } from './services/picture.service';
import { CockpitComponent } from './random/cockpit/cockpit.component';
import { FormBuilder } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RandomPictureComponent,
    RandomFactComponent,
    CockpitComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ FactService, PictureService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
