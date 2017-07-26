import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServicioComponent } from './servicio/servicio.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import {MdNativeDateModule} from '@angular/material';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';


import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { GoogleMapApiDirectionComponent } from './google-map-api-direction/google-map-api-direction.component';


@NgModule({
  declarations: [
    AppComponent,
    ServicioComponent,
    GoogleMapApiDirectionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdNativeDateModule,
    MdButtonModule,
    MdCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
