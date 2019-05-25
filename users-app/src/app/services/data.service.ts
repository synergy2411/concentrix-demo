import { AuthServiceService } from './auth-service.service';
import { Injectable } from '@angular/core';
import { USER_DATA } from '../model/mocks';
import { IUser } from '../model/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn : 'root'
})
export class DataService {
    
    counter : number = 0;

    getData(): IUser[] {
        return USER_DATA;
    }

    makeHttpCall(){
        this.httpClient.get("https://jsonplaceholder.typicode.com/todos")
        .subscribe(response => console.log("[RESPONSE]", response));
    }

    getJsonData(){
        return this.httpClient.get("./assets/model/user-data.json")
            // .subscribe(response => console.log("[USER_DATA]", response));
    }

    getDataFromAPI(){
        // return this.httpClient.get("https://cnx-demo.firebaseio.com/userdata.json?auth="+this.authService.getToken());
        return this.httpClient.get<IUser[]>("https://cnx-demo.firebaseio.com/userdata.json");
    }
    constructor(private httpClient : HttpClient, private authService : AuthServiceService){}
}  