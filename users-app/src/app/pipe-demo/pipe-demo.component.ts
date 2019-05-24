import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent{
  
  contact_no = 987654321;

  promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("Here comes the data....")
    }, 2000);
  })
}
