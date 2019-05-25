import { SpecificationComponent } from './product/specification/specification.component';
import { Compoennt } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { LoginGaurdService } from './services/login-gaurd.service';
import { OverviewComponent } from './product/overview/overview.component';

export const APP_ROUTES : Routes = [{
    path : "",
    redirectTo : "login",
    pathMatch : "full"
},{
    path : "login",
    component : LoginComponent
}, {
    path : "register",
    component : RegisterComponent
}, {
    path : "pipe",
    component : PipeDemoComponent
}, {
    path : "observable",
    component : ObservableDemoComponent
}, {
    path : "users",
    component : UsersComponent,
    canActivate : [LoginGaurdService]
}, {
    path : "product",
    component : ProductComponent,
    children : [{
        path : 'overview/:product_id/:product_name',
        component : OverviewComponent
    },{
        path : "spec",
        component : SpecificationComponent
    }]
},{
    path : "**",
    redirectTo : "login",
    pathMatch : "full"
}]

// http://localhost:4200/product/overview
// http://localhost:4200/product/overview/3
// http://localhost:4200/product/spec