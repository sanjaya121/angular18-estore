import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  searchText=new Subject<string>();

  shareSearchText=(text:string)=>{
   this.searchText.next(text);
  }
}
