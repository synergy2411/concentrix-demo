import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [               //Components, Pipes, Directives
    AppComponent, UsersComponent
  ],
  imports: [                    // Modules - built-in or custom
    BrowserModule
  ],
  providers: [],                // Service - 
  bootstrap: [AppComponent, UsersComponent]
})
export class AppModule { }
