import { Component, Input } from '@angular/core';
import { IUser } from '../model/user.model';

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

    moreInfo(user : IUser){
        alert(`Mr. ${user.lastName} is working with ${user.company}!!`);
    }

    user : IUser = {
        firstName : "Bill",
        lastName : "Gates",
        isWorking : true,
        income : 50000,
        dob : new Date("Dec 21, 1965"),
        company : "Microsoft",
        vote : 120,
        image : 'assets/images/bill.jpg'
    }
}

// Selectors Types: 
// element <app-users></app-users>
// class : <div class="app-users"></div>
// attributes : <div app-users></div>