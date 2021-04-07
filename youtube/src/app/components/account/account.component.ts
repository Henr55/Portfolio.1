import { MyServiceService } from './../../services/myService.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private myServiceService:MyServiceService) { }

  ngOnInit() {
    this.myServiceService.updateBool(true);
  }

}
