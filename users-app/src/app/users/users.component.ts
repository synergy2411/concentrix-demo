import { Component, Input, 
        OnChanges, 
        SimpleChanges, 
        OnInit, 
        DoCheck, 
        AfterContentInit, 
        AfterContentChecked, 
        AfterViewInit, 
        AfterViewChecked, 
        OnDestroy } from '@angular/core';
import { IUser } from '../model/user.model';
import { USER_DATA } from '../model/mocks';

@Component({
    // selector : "[app-users]",
    // selector : ".app-users",
    selector : "app-users",
    // template : `<h1>Users component loaded successfully!</h1>`
    templateUrl : `./users.component.html`
})
export class UsersComponent {

    @Input('title') 
    title : string;

    users : IUser[];

    showList : boolean = true;

    constructor(){
        // this.users = USER_DATA;
        // console.log("[Constructor]");
        // console.log("[USER_DATA in Constructor]");
    }

    moreInfo(user : IUser){
        alert(`Mr. ${user.lastName} is working with ${user.company}!!`);
    }

    ngOnChanges(changes : SimpleChanges){
        // console.log("[ngOnChanges]", changes);
    }

    ngOnInit(){
        // console.log("[ngOnInit]");
        this.users = USER_DATA;
    }
    // ngDoCheck(){console.log("[ngDoCheck]")}
    // ngAfterContentInit(){console.log("[ngAfterContentInit]")}
    // ngAfterContentChecked(){console.log("[ngAfterContentChecked]")}
    // ngAfterViewInit(){console.log("[ngAfterViewInit]")}
    // ngAfterViewChecked(){console.log("[ngAfterViewChecked]")}
    // ngOnDestroy(){console.log("[ngOnDestroy]")}
    
}

// Selectors Types: 
// element <app-users></app-users>
// class : <div class="app-users"></div>
// attributes : <div app-users></div>