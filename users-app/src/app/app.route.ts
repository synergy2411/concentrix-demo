import { UsersComponent } from './users/users.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';

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
    component : UsersComponent
}, {
    path : "**",
    redirectTo : "login",
    pathMatch : "full"
}]