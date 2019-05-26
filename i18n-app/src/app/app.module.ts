import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonInfoComponent } from './person-info/person-info.component';

@NgModule({
  declarations: [
  PersonInfoComponent, AppComponent],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }