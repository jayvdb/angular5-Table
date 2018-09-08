import { Component, OnInit,OnChanges,Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() dataTable;
  @Input() itemsForPage;
  @Input() pagination;
  @Input() filterValue;  
  public paginatedItems: any[];
  public pages: number;
  public pageNumber : number = 1;
  public currentIndex : number = 1;
  public pagesIndex : Array<number>;
  public pageStart : number = 1;
  public filteredItems: any[];

  ngOnInit() {
    this.ngOnChanges();
  }

  ngOnChanges(){
    console.log(`onchange setting filteredItems..`);
    this.FilterByName();
    this.start();
  }

  start(){
    if (!this.filteredItems) {
      return;
    }
    console.log(`paginating ${this.filteredItems.length} filtered items...`);
    this.pages = Math.ceil(this.filteredItems.length / this.itemsForPage);
    this.paginateItems();
    console.log(`paginated ${this.paginatedItems.length} filtered items.`);
  }
  
  paginationArray(): any{
    var obj = new Array();
    for(var index = this.pageStart; index< this.pageStart + this.pages; index ++) {
      obj.push(index);
    }
    return obj;
  }

  paginateItems(){
    if(!this.dataTable){
      this.paginatedItems = this.dataTable;
      return;
    }
    if(!this.pagination){
      this.paginatedItems = this.filteredItems;
      return;
    }
    this.paginatedItems = this.filteredItems.slice((this.currentIndex - 1) * this.itemsForPage, this.currentIndex * this.itemsForPage);//this.currentIndex * this.itemsForPage, this.currentIndex * this.itemsForPage + this.itemsForPage
    this.pagesIndex = this.paginationArray();
  }

  prevPage(){
    if(this.currentIndex>1){
       this.currentIndex --;
    } 
    if(this.currentIndex < this.pageStart){
       this.pageStart = this.currentIndex;
    }
    this.paginateItems();
  }

  nextPage(){
    if(this.currentIndex >= this.pages) return;
    if(this.currentIndex >= this.pageNumber){
          this.currentIndex ++;
    }
    this.paginateItems();
  }

  setPage(index : number){
    this.currentIndex = index;
    this.paginateItems();
  }
  
  FilterByName(){
    if (!this.dataTable || !this.dataTable[0]) {
      console.log(`FilterByName without a dataTable`);
      return;
    }
    console.log(`FilterByName ${this.filterValue}`);
    var keys = Object.keys(this.dataTable[0]);
    console.log(`FilterByName keys = ${keys}`);
    this.filteredItems = [];
    if(this.filterValue !== undefined && this.filterValue != ""){
      this.filteredItems = this.dataTable.filter(e => keys.some(e2 => e[e2] !== undefined && e[e2] !== null && typeof e[e2] === 'string' ? e[e2].toLowerCase().includes(this.filterValue.toLowerCase()) : undefined));
    }else{
      this.filteredItems = this.dataTable;
    }
    console.log(this.filteredItems);
    this.start();
  }
}
