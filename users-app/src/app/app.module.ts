
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserImageComponent } from './users/user-image/user-image.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DynamicHighlightDirective } from './directives/dynamic-highlight.directive';


@NgModule({
  declarations: [               //Components, Pipes, Directives
    AppComponent, UsersComponent, UserImageComponent, UserInfoComponent,
    HighlightDirective,
    DynamicHighlightDirective
  ],
  imports: [                    // Modules - built-in or custom
    BrowserModule, FormsModule
  ],
  providers: [],                // Service - 
  // bootstrap: [AppComponent, UsersComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
