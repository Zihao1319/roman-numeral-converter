import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RomanToNumeralComponent } from './roman-to-numeral/roman-to-numeral.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NumeralToRomanComponent } from './numeral-to-roman/numeral-to-roman.component';

@NgModule({
  declarations: [
    AppComponent,
    RomanToNumeralComponent,
    NumeralToRomanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
