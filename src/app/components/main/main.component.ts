import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  bool:boolean=false;

  constructor() { }

  ngOnInit() {
  }
  myFunction() {
    document.getElementById("navbar")?.classList.toggle('none')
    }
  foo(event:string){
    console.log(event)
  }
}
