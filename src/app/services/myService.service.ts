import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  private search=new Subject<string>();
  private bool=new Subject<boolean>();
constructor() { }

  updateSearch(name:string){
    this.search.next(name);
  }
  getSearch(){
    return this.search.asObservable();
  }

  updateBool(bool:boolean){
    this.bool.next(bool);
  }

  getBool(){
    return this.bool.asObservable();
  }
}
