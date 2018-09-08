import { Component,OnInit,OnChanges,DoCheck,Input,ViewChild,Output, EventEmitter } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'angular5Table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit,OnChanges,DoCheck {
  @ViewChild('paginationTable') paginationComponent: PaginationComponent;
  @ViewChild('filterTable') filterComponent: FilterComponent;
  @Input() dataTable;
  @Input() dataColumn;
  @Input() itemsForPage;
  @Input() pagination;
  @Input() show_table = true;
  @Input() options;
  @Input() filter;
  @Input() sortable;
  @Input() functionDefault;
  @Input() filterPlaceholder;

  @Output() callBackFunction: EventEmitter<any> = new EventEmitter<any>();
  @Output() currentDataTableChange: EventEmitter<any> = new EventEmitter<any>();

  public items: any[] = [];
  public columsKeys: any[] = [];
  public orderType: boolean;
  public nameColumn: string;
  public inputName: string;
  public filterFunction: Function;
  public mergeObject: any[] = [];

  ngOnInit(){
    console.log(`table data: ${this.dataTable}`);
    this.filterFunction = this.filterTable.bind(this);
  }

  ngDoCheck(){
    this.inputName = this.filterComponent.filterValue;
    this.items = this.paginationComponent.paginatedItems;
    console.log(`ngDoCheck(): items = ${this.items}`);
    this.currentDataTableChange.emit(this.items);
  }

  ngOnChanges(){
    this.ngDoCheck();
    console.log(`ngOnChanges(): items = ${this.items}`);
  }

  @Input()
  get currentDataTable(){
    console.log(`currentDataTable(): items = ${this.items}`);
    return this.items;
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
    this.currentDataTableChange.emit(this.items);
  }

  filterTable(){
    if (!this.dataTable) {
      console.log(`filterTable without a dataTable`);
      return;
    }
    this.paginationComponent.FilterByName();
  }

  selectCallBack(event: any, data: object, key: string): void {
    event.item = data;
    event.column_name = key;
    this.callBackFunction.emit(event);
  }

}
