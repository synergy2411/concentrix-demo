
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserImageComponent } from './users/user-image/user-image.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DynamicHighlightDirective } from './directives/dynamic-highlight.directive';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';


@NgModule({
  declarations: [               //Components, Pipes, Directives
    AppComponent, UsersComponent, UserImageComponent, UserInfoComponent,
    HighlightDirective,
    DynamicHighlightDirective,
    LoginComponent,
    RegisterComponent
  ],
  imports: [                    // Modules - built-in or custom
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],                // Service - 
  // bootstrap: [AppComponent, UsersComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
