import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {

  name : string;
  id : number;

  constructor(private route : ActivatedRoute){
    this.id = +this.route.snapshot.params['product_id'];
    this.route.params.subscribe(params => {
      this.name = params['product_name'];
    })
  }
}
