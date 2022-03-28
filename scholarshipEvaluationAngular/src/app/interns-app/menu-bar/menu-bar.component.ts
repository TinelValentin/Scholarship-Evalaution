import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Filter } from 'src/app/filter';
import { FiltersService } from 'src/app/services/filters.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  filterArray:Filter[];
  @Output() emitSelectedFilter = new EventEmitter<string>();
  
  constructor(private filterService:FiltersService) { }

  ngOnInit(): void {
    this.filterArray=this.filterService.getFilter();
  }

  emitFilter(id:string)
  {
    this.emitSelectedFilter.emit(id);
  }
}
