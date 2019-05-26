import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css']
})
export class SpecificationComponent{

  page_number : number;
  bookName : string;
  constructor(private route : ActivatedRoute){
    this.page_number = +this.route.snapshot.queryParams['page_no'];
    this.route.queryParams.subscribe(params => {
      console.log("[QUERY PARAMETER]", params);
      this.bookName = params['book_name'];
    })
  }
}