import { Component,OnInit,DoCheck,Input,ViewChild,Output, EventEmitter } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'angular5Table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit,DoCheck {
  @ViewChild('paginationTable') paginationComponent: PaginationComponent;
  @ViewChild('filterTable') filterComponent: FilterComponent;
  @Input() dataTable;
  @Input() dataColumn;
  @Input() itemsForPage;
  @Input() pagination;
  @Input() options;
  @Input() filter;
  @Input() sortable;
  @Input() functionDefault;
  public items: any[] = [];
  public columsKeys: any[] = [];
  public orderType: boolean;
  public nameColumn: string;
  public inputName: string;
  public filterFunction: Function;
  public mergeObject: any[] = [];

  ngOnInit(){
    console.log(this.dataTable);
    this.filterFunction = this.filterTable.bind(this);
  }

  ngDoCheck(){
    this.inputName = this.filterComponent.filterValue;
    this.items = this.paginationComponent.paginatedItems;
  }

  sort(nameColumnParam: string){
    if(!this.sortable) return;
    this.orderType = !this.orderType; //change the direction    
    let direction = this.orderType ? 1 : -1;
    this.nameColumn = nameColumnParam;
    this.items.sort(function(a, b){
        if(a[nameColumnParam] < b[nameColumnParam]){
            return -1 * direction;
        }
        else if( a[nameColumnParam] > b[nameColumnParam]){
            return 1 * direction;
        }
        else{
            return 0;
        }
    });
  }

  localFunctionDefault(index: number, type: any, item: any, option: any) {
    this.functionDefault(index. type, item, option);
  }

  filterTable(){
    this.paginationComponent.FilterByName();
  }

}
