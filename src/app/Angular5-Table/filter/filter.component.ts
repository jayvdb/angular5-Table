import { Component, OnInit, Input, EventEmitter, DoCheck} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, DoCheck {
  @Input() filter;
  @Input() filterFunction;
  public filterValue: string;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(){
  
  }

}
