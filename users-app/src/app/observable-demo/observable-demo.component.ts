import { Component } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent{
  
  observable = Observable.create((observer)=>{
    setTimeout(()=>{
      observer.next("First Package")
    }, 1000);
    setTimeout(()=>{
      observer.next("Second Package")
    }, 2000);
    setTimeout(()=>{
      observer.next("Third Package")
    }, 4000);
    setTimeout(()=>{
      observer.error(new Error("Something Bad Happened!"));
    }, 5000);
    setTimeout(()=>{
      observer.complete();
    }, 6000);
  });
  subcription : any;

  onUnsubscribe(){
    this.subcription.unsubscribe();
  }

  onSubscribe(){
    this.subcription = this.observable.subscribe(
      data =>{console.log("[PACKAGE]",data)},
      err => {console.log("[ERROR]", err)},
      () => {console.log("[COMPLETED]")}
    ) 
  }

}
