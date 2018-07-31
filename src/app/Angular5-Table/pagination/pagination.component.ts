import { Component, OnInit,OnChanges,Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() dataTable;
  @Input() itemsForPage;
  @Input() pagination;
  @Input() filterValue;  
  public paginatedItems: any[];
  public pages: number;
  public pageNumber : number = 0;
  public currentIndex : number = 1;
  public pagesIndex : Array<number>;
  public pageStart : number = 1;
  public filteredItems: any[];

  ngOnInit() {
    this.filteredItems = this.dataTable;
    this.start();
  }

  start(){
    this.pages = Math.ceil(this.filteredItems.length / this.itemsForPage);
    this.paginateItems();
  }
  
  paginationArray(): any{
    var obj = new Array();
    for(var index = this.pageStart; index< this.pageStart + this.pages; index ++) {
      obj.push(index);
    }
    return obj;
  }

  paginateItems(){
    if(!this.pagination){
      this.paginatedItems = this.dataTable;
      return;
    }
    this.paginatedItems = this.filteredItems.slice((this.currentIndex - 1)*this.itemsForPage, (this.currentIndex) * this.itemsForPage);
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
    if(this.currentIndex > this.pageNumber){
          this.currentIndex ++;
    }
    this.paginateItems();
  }

  setPage(index : number){
    this.currentIndex = index;
    this.paginateItems();
  }
  
  FilterByName(){
    this.filteredItems = [];
    if(this.filterValue != ""){
      this.dataTable.forEach(element => {
          if(element.name.toUpperCase().indexOf(this.filterValue.toUpperCase())>=0){
            this.filteredItems.push(element);
          }
      });
    }else{
      this.filteredItems = this.dataTable;
    }
    console.log(this.filteredItems);
    this.start();
 }
}
