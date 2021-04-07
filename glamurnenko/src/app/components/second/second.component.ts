import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor() { }
  pakets:any[]=[{
    id:1,
    header:'Пакет',
    date:'попробовать',
    time:'В пределах 24 часов',
    questions:'5 ваших луков или 5 вопросов',
    oldPrice:890,
    price:499
  },
  {
  id:2,
  header:'Пакет',
  date:'1 день',
  time:'В пределах 24 часов',
  questions:'до 100',
  oldPrice:3900,
  price:2900
},
{
id:3,
header:'Пакет',
date:'1 месяц',
time:'В течение месяца',
questions:'неограниченно',
oldPrice:11900,
price:9900
}
]
  ngOnInit() {
  }

}
