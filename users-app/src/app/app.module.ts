
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { APP_ROUTES } from './app.route';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DynamicHighlightDirective } from './directives/dynamic-highlight.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { UserImageComponent } from './users/user-image/user-image.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { UsersComponent } from './users/users.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { LoggerInterceptorService } from './services/logger-interceptor.service';
import { HeaderComponent } from './header/header.component';


import { AuthInterceptorService } from './services/auth-interceptor.service';
import { AuthServiceService } from './services/auth-service.service';
import { LoginGaurdService } from './services/login-gaurd.service';
import { ProductComponent } from './product/product.component';
import { OverviewComponent } from './product/overview/overview.component';
import { SpecificationComponent } from './product/specification/specification.component';


@NgModule({
  declarations: [               //Components, Pipes, Directives
    AppComponent, UsersComponent, UserImageComponent, UserInfoComponent,
    HighlightDirective,
    DynamicHighlightDirective,
    LoginComponent,
    RegisterComponent,
    PipeDemoComponent,
    CountryCodePipe,
    FilterPipe,
    ObservableDemoComponent,
    HeaderComponent,
    ProductComponent,
    OverviewComponent,
    SpecificationComponent
  ],
  imports: [                    // Modules - built-in or custom
    BrowserModule, FormsModule, ReactiveFormsModule,
    HttpClientModule, RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [ LoginGaurdService, AuthServiceService,
    // Interceptor Registered
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptorService,
      multi : true
    },{
      provide : HTTP_INTERCEPTORS,
      useClass : LoggerInterceptorService,
      multi : true
    },
    // Value Injection
    {
    provide : "COMPANY_NAME",
    useValue : "CNX"
  },
  // Factory Injection
  {
    provide:'AddNumbers', 
    useFactory:()=>{
      return function(a:number,b:number){
        return a+b;
       }
    }
  } ],                
  // bootstrap: [AppComponent, UsersComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
