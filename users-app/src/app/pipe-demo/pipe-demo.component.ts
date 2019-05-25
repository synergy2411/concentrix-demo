import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent{
  
  filteredStatus : string = "";

  onAddNewTodo(){
    this.todos.push({label : "New Task", status : "pending"});
  }

  todos = [{
    label : "Some Task",
    status : 'done'
  },{
    label : "New Task",
    status : 'pending'
  },{
    label : "Some Task",
    status : 'done'
  },{
    label : "New Task",
    status : 'pending'
  }]

  contact_no = 987654321;

  promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("Here comes the data....")
    }, 2000);
  })
}
