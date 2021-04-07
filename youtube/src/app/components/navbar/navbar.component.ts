import { Subscription } from 'rxjs';
import { MyServiceService } from 'src/app/services/myService.service';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  boolSub!:Subscription;
  constructor(private myService:MyServiceService) { }

  ngOnInit() {
    this.boolSub=this.myService.getBool().subscribe(
      res=>{
        this.myFunction(res)
      }
    )
  }
  myFunction(b:boolean) {
    if(b){
      document.getElementById("navbar")?.classList.add('none')
    }
    else
    document.getElementById("navbar")?.classList.remove('none')

  }
}
