import { Component, Input } from '@angular/core';
import { IUser } from '../model/user.model';
import { USER_DATA } from '../model/mocks';

@Component({
    // selector : "[app-users]",
    // selector : ".app-users",
    selector : "app-users",
    // template : `<h1>Users component loaded successfully!</h1>`
    templateUrl : `./users.component.html`
})
export class UsersComponent{

    @Input('title') 
    title : string;

    user : IUser;

    constructor(){
        this.user = USER_DATA;
        console.log("[USER_DATA]", USER_DATA);
    }

    moreInfo(user : IUser){
        alert(`Mr. ${user.lastName} is working with ${user.company}!!`);
    }

    
}

// Selectors Types: 
// element <app-users></app-users>
// class : <div class="app-users"></div>
// attributes : <div app-users></div>