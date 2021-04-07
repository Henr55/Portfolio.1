import { Component, OnInit, NgModule, Output, EventEmitter } from '@angular/core';
import { MyServiceService } from 'src/app/services/myService.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  bool:boolean=false;
  ser:string='';
  constructor(private MyService:MyServiceService) { }
  ngOnInit() {
  }

  Search(){
    this.MyService.updateSearch(this.ser)
  }
  myFunction(){
    this.bool=!this.bool;
    this.MyService.updateBool(this.bool)
  }

}
