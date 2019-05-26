import { Component, Input, SimpleChanges, Inject, ChangeDetectionStrategy } from '@angular/core';
import { IUser } from '../model/user.model';
import { DataService } from '../services/data.service';

@Component({
    // selector : "[app-users]",
    // selector : ".app-users",
    selector: "app-users",
    // template : `<h1>Users component loaded successfully!</h1>`
    templateUrl: `./users.component.html`,
    // providers: [DataService]
    changeDetection : ChangeDetectionStrategy.OnPush
})
export class UsersComponent {

    @Input('title')
    title: string;

    users: IUser[];

    showList: boolean = true;

    constructor(public dataService: DataService, 
        @Inject('AddNumbers') add : any,
        @Inject("COMPANY_NAME") companyName : string) {
        console.log("Company Name : ", companyName);
        console.log("Sum : ", add(5,7));
        // this.users = USER_DATA;
        // console.log("[Constructor]");
        // console.log("[USER_DATA in Constructor]");
    }

    onIncrease() {
        this.dataService.counter++;
    }

    moreInfo(user: IUser) {
        alert(`Mr. ${user.lastName} is working with ${user.company}!!`);
    }

    ngOnChanges(changes: SimpleChanges) {
        // console.log("[ngOnChanges]", changes);
    }

    ngOnInit() {
      
        // console.log("[ngOnInit]");
        // this.users = USER_DATA;
        // this.users = this.dataService.getData();
        // this.dataService.makeHttpCall();
        // this.dataService.getJsonData()
        // .subscribe (response => this.users = response['userdata']);

        this.dataService.getDataFromAPI()
        .subscribe(response => this.users = <IUser[]>response)
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