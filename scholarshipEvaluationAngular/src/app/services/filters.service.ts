import { Injectable } from '@angular/core';
import { Filter } from '../filter';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  filter: Filter[] = [
    {name:'Show Backend Programmers',id:"1"},
    {name:'Ascending', id:"2"},
    {name:'Descending', id:"3"},
    {name:'Short Date', id:"4"},
    {name:'Medium Date', id:"5"},
    {name:'Long Date', id:"6"}
  ];

  getFilter()
  {
    return this.filter;
  }
  constructor() { }
}
