import { Component, Input, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PaginationComponent {
    constructor() {
        this.pageNumber = 1;
        this.currentIndex = 1;
        this.pageStart = 1;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.filteredItems = this.dataTable;
        this.start();
    }
    /**
     * @return {?}
     */
    start() {
        this.pages = Math.ceil(this.filteredItems.length / this.itemsForPage);
        this.paginateItems();
    }
    /**
     * @return {?}
     */
    paginationArray() {
        var /** @type {?} */ obj = new Array();
        for (var /** @type {?} */ index = this.pageStart; index < this.pageStart + this.pages; index++) {
            obj.push(index);
        }
        return obj;
    }
    /**
     * @return {?}
     */
    paginateItems() {
        if (!this.pagination) {
            this.paginatedItems = this.dataTable;
            return;
        }
        this.paginatedItems = this.filteredItems.slice((this.currentIndex - 1) * this.itemsForPage, this.currentIndex * this.itemsForPage); //this.currentIndex * this.itemsForPage, this.currentIndex * this.itemsForPage + this.itemsForPage
        this.pagesIndex = this.paginationArray();
    }
    /**
     * @return {?}
     */
    prevPage() {
        if (this.currentIndex > 1) {
            this.currentIndex--;
        }
        if (this.currentIndex < this.pageStart) {
            this.pageStart = this.currentIndex;
        }
        this.paginateItems();
    }
    /**
     * @return {?}
     */
    nextPage() {
        if (this.currentIndex >= this.pages)
            return;
        if (this.currentIndex >= this.pageNumber) {
            this.currentIndex++;
        }
        this.paginateItems();
    }
    /**
     * @param {?} index
     * @return {?}
     */
    setPage(index) {
        this.currentIndex = index;
        this.paginateItems();
    }
    /**
     * @return {?}
     */
    FilterByName() {
        var /** @type {?} */ keys = Object.keys(this.dataTable[0]);
        this.filteredItems = [];
        if (this.filterValue != "") {
            this.filteredItems = this.dataTable.filter(e => keys.some(e2 => e[e2].includes(this.filterValue)));
        }
        else {
            this.filteredItems = this.dataTable;
        }
        console.log(this.filteredItems);
        this.start();
    }
}
PaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-pagination',
                template: `<div *ngIf="pagination">
<div class="row">
    <div class="col-xs-4 col-sm-4 col-md-4"></div>
    <div class="col-xs-4 col-sm-4 col-md-4">
        <ul class="pagination pagination-circle pg-blue mb-0 justify-content-center">
            <!--Arrow left-->
            <li [ngClass]="{'page-item': (currentIndex == 1 || pageNumber == 0)}">
                <a class="page-link" aria-label="Previous" (click)="prevPage()">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                </a>
            </li>
            <!--Numbers-->
            <li *ngFor="let page of pagesIndex" [ngClass]="{'page-item active': (currentIndex == page)}">
                <a (click)="setPage(page)" class="page-link">{{page}}</a>
            </li>
            <!--Arrow right-->
            <li [ngClass]="{'page-item': (currentIndex == pageNumber || pageNumber == 0)}">
                <a class="page-link" aria-label="Next" (click)="nextPage()">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                </a>
            </li>
        </ul>
    </div>
    <div class="col-xs-4 col-sm-4 col-md-4"></div>
</div>
</div>
`,
                styles: [`.pagination .page-item.active .page-link{background-color:#282828!important;color:#f8f8f8!important;font-weight:700!important}.pagination .page-link{margin:0 5px;border-radius:5px}.pagination .page-link:hover{background-color:#f8f8f8!important}`]
            },] },
];
/** @nocollapse */
PaginationComponent.propDecorators = {
    "dataTable": [{ type: Input },],
    "itemsForPage": [{ type: Input },],
    "pagination": [{ type: Input },],
    "filterValue": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FilterComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
    }
}
FilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-filter',
                template: `<div class="row" *ngIf="filter">
    <div class="col-xs-0 col-sm-4 col-md-4"></div>
    <div class="col-xs-4 col-sm-4 col-md-4">
      <div class="input-group">
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text"><i class="fa fa-search"></i></div>
          </div>
          <input class="form-control" placeholder="Search.." id="inputName" (keyup)="filterFunction()" [(ngModel)]="filterValue">
        </div>
    </div>
  <div class="col-xs-0 col-sm-4 col-md-4"></div>
</div>
<br>`,
                styles: [``]
            },] },
];
/** @nocollapse */
FilterComponent.ctorParameters = () => [];
FilterComponent.propDecorators = {
    "filter": [{ type: Input },],
    "filterFunction": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TableComponent {
    constructor() {
        this.items = [];
        this.columsKeys = [];
        this.mergeObject = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log(this.dataTable);
        this.filterFunction = this.filterTable.bind(this);
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        this.inputName = this.filterComponent.filterValue;
        this.items = this.paginationComponent.paginatedItems;
    }
    /**
     * @param {?} nameColumnParam
     * @return {?}
     */
    sort(nameColumnParam) {
        if (!this.sortable)
            return;
        this.orderType = !this.orderType; //change the direction
        let /** @type {?} */ direction = this.orderType ? 1 : -1;
        this.nameColumn = nameColumnParam;
        this.items.sort(function (a, b) {
            if (a[nameColumnParam] < b[nameColumnParam]) {
                return -1 * direction;
            }
            else if (a[nameColumnParam] > b[nameColumnParam]) {
                return 1 * direction;
            }
            else {
                return 0;
            }
        });
    }
    /**
     * @return {?}
     */
    filterTable() {
        this.paginationComponent.FilterByName();
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'angular5Table',
                template: `<div class="row" style="margin-right: 1px;">
  <div class="col-xs-0 col-sm-1 col-md-1"></div>
  <div class="col-xs-0 col-sm-10 col-md-10">
    <app-filter
      #filterTable
      [filter]="filter"
      [filterFunction]="filterFunction">
    </app-filter>
    <br>
    <table class="table table-bordered table-condensed" style="text-align:center">
        <thead class="header-table">
          <th *ngFor="let key of dataColumn" (click)="sort(key)">
            {{key}}
            <i *ngIf="orderType && nameColumn === key" class="material-icons">&uarr;</i>
            <i *ngIf="!orderType && nameColumn === key" class="material-icons">&darr;</i>
          </th>
          <th *ngFor="let option of options">{{option.name}}</th>
        </thead>
        <tbody>
          <tr *ngFor="let item of items; let i=index">
            <td *ngFor="let key of dataColumn">{{item[key]}}</td>
            <td *ngFor="let option of options">
              <img *ngIf="option.type==='img'" src="../assets/{{option.url}}" class="img" (click)="functionDefault(i,option.name,items[i],option)">
              <button *ngIf="option.type==='button'" class={{option.class}} (click)="functionDefault(i,option.name,items[i],option)">{{option.name}}</button>
              <input type="text" *ngIf="option.type==='text'" class={{option.class}}>
            </td>
          </tr>
        </tbody>
    </table>
    <br>
    <app-pagination 
      #paginationTable 
      [dataTable]="dataTable"
      [itemsForPage]="itemsForPage"
      [pagination]="pagination"
      [filterValue]="inputName">
    </app-pagination>
  </div>
  <div class="col-xs-0 col-sm-1 col-md-1"></div>
</div>

`,
                styles: [`.img{width:20px;height:20px}.header-table{background-color:#f8f8f8!important}`],
            },] },
];
/** @nocollapse */
TableComponent.propDecorators = {
    "paginationComponent": [{ type: ViewChild, args: ['paginationTable',] },],
    "filterComponent": [{ type: ViewChild, args: ['filterTable',] },],
    "dataTable": [{ type: Input },],
    "dataColumn": [{ type: Input },],
    "itemsForPage": [{ type: Input },],
    "pagination": [{ type: Input },],
    "options": [{ type: Input },],
    "filter": [{ type: Input },],
    "sortable": [{ type: Input },],
    "functionDefault": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Angular5TableModule {
}
Angular5TableModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule
                ],
                declarations: [
                    TableComponent,
                    FilterComponent,
                    PaginationComponent
                ],
                exports: [
                    TableComponent,
                    FilterComponent,
                    PaginationComponent
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { Angular5TableModule, TableComponent as ɵa, FilterComponent as ɵb, PaginationComponent as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjUtdGFibGUuanMubWFwIiwic291cmNlcyI6WyJuZzovL2FuZ3VsYXI1LXRhYmxlL3NyYy9hcHAvQW5ndWxhcjUtVGFibGUvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhcjUtdGFibGUvc3JjL2FwcC9Bbmd1bGFyNS1UYWJsZS9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhcjUtdGFibGUvc3JjL2FwcC9Bbmd1bGFyNS1UYWJsZS9Bbmd1bGFyNS1UYWJsZS90YWJsZS5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXI1LXRhYmxlL3NyYy9hcHAvQW5ndWxhcjUtVGFibGUvYW5ndWxhcjUtdGFibGUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LE9uQ2hhbmdlcyxJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlOiBgPGRpdiAqbmdJZj1cInBhZ2luYXRpb25cIj5cbjxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTQgY29sLXNtLTQgY29sLW1kLTRcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTQgY29sLXNtLTQgY29sLW1kLTRcIj5cbiAgICAgICAgPHVsIGNsYXNzPVwicGFnaW5hdGlvbiBwYWdpbmF0aW9uLWNpcmNsZSBwZy1ibHVlIG1iLTAganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgPCEtLUFycm93IGxlZnQtLT5cbiAgICAgICAgICAgIDxsaSBbbmdDbGFzc109XCJ7J3BhZ2UtaXRlbSc6IChjdXJyZW50SW5kZXggPT0gMSB8fCBwYWdlTnVtYmVyID09IDApfVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnZS1saW5rXCIgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCIgKGNsaWNrKT1cInByZXZQYWdlKClcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JmxhcXVvOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwhLS1OdW1iZXJzLS0+XG4gICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IHBhZ2Ugb2YgcGFnZXNJbmRleFwiIFtuZ0NsYXNzXT1cInsncGFnZS1pdGVtIGFjdGl2ZSc6IChjdXJyZW50SW5kZXggPT0gcGFnZSl9XCI+XG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cInNldFBhZ2UocGFnZSlcIiBjbGFzcz1cInBhZ2UtbGlua1wiPnt7cGFnZX19PC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwhLS1BcnJvdyByaWdodC0tPlxuICAgICAgICAgICAgPGxpIFtuZ0NsYXNzXT1cInsncGFnZS1pdGVtJzogKGN1cnJlbnRJbmRleCA9PSBwYWdlTnVtYmVyIHx8IHBhZ2VOdW1iZXIgPT0gMCl9XCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBhcmlhLWxhYmVsPVwiTmV4dFwiIChjbGljayk9XCJuZXh0UGFnZSgpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZyYXF1bzs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPk5leHQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTQgY29sLXNtLTQgY29sLW1kLTRcIj48L2Rpdj5cbjwvZGl2PlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgLnBhZ2luYXRpb24gLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGlua3tiYWNrZ3JvdW5kLWNvbG9yOiMyODI4MjghaW1wb3J0YW50O2NvbG9yOiNmOGY4ZjghaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OjcwMCFpbXBvcnRhbnR9LnBhZ2luYXRpb24gLnBhZ2UtbGlua3ttYXJnaW46MCA1cHg7Ym9yZGVyLXJhZGl1czo1cHh9LnBhZ2luYXRpb24gLnBhZ2UtbGluazpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmOGY4ZjghaW1wb3J0YW50fWBdXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkYXRhVGFibGU7XG4gIEBJbnB1dCgpIGl0ZW1zRm9yUGFnZTtcbiAgQElucHV0KCkgcGFnaW5hdGlvbjtcbiAgQElucHV0KCkgZmlsdGVyVmFsdWU7ICBcbiAgcHVibGljIHBhZ2luYXRlZEl0ZW1zOiBhbnlbXTtcbiAgcHVibGljIHBhZ2VzOiBudW1iZXI7XG4gIHB1YmxpYyBwYWdlTnVtYmVyIDogbnVtYmVyID0gMTtcbiAgcHVibGljIGN1cnJlbnRJbmRleCA6IG51bWJlciA9IDE7XG4gIHB1YmxpYyBwYWdlc0luZGV4IDogQXJyYXk8bnVtYmVyPjtcbiAgcHVibGljIHBhZ2VTdGFydCA6IG51bWJlciA9IDE7XG4gIHB1YmxpYyBmaWx0ZXJlZEl0ZW1zOiBhbnlbXTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSB0aGlzLmRhdGFUYWJsZTtcbiAgICB0aGlzLnN0YXJ0KCk7XG4gIH1cblxuICBzdGFydCgpe1xuICAgIHRoaXMucGFnZXMgPSBNYXRoLmNlaWwodGhpcy5maWx0ZXJlZEl0ZW1zLmxlbmd0aCAvIHRoaXMuaXRlbXNGb3JQYWdlKTtcbiAgICB0aGlzLnBhZ2luYXRlSXRlbXMoKTtcbiAgfVxuICBcbiAgcGFnaW5hdGlvbkFycmF5KCk6IGFueXtcbiAgICB2YXIgb2JqID0gbmV3IEFycmF5KCk7XG4gICAgZm9yKHZhciBpbmRleCA9IHRoaXMucGFnZVN0YXJ0OyBpbmRleDwgdGhpcy5wYWdlU3RhcnQgKyB0aGlzLnBhZ2VzOyBpbmRleCArKykge1xuICAgICAgb2JqLnB1c2goaW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgcGFnaW5hdGVJdGVtcygpe1xuICAgIGlmKCF0aGlzLnBhZ2luYXRpb24pe1xuICAgICAgdGhpcy5wYWdpbmF0ZWRJdGVtcyA9IHRoaXMuZGF0YVRhYmxlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnBhZ2luYXRlZEl0ZW1zID0gdGhpcy5maWx0ZXJlZEl0ZW1zLnNsaWNlKCh0aGlzLmN1cnJlbnRJbmRleCAtIDEpICogdGhpcy5pdGVtc0ZvclBhZ2UsIHRoaXMuY3VycmVudEluZGV4ICogdGhpcy5pdGVtc0ZvclBhZ2UpOy8vdGhpcy5jdXJyZW50SW5kZXggKiB0aGlzLml0ZW1zRm9yUGFnZSwgdGhpcy5jdXJyZW50SW5kZXggKiB0aGlzLml0ZW1zRm9yUGFnZSArIHRoaXMuaXRlbXNGb3JQYWdlXG4gICAgdGhpcy5wYWdlc0luZGV4ID0gdGhpcy5wYWdpbmF0aW9uQXJyYXkoKTtcbiAgfVxuXG4gIHByZXZQYWdlKCl7XG4gICAgaWYodGhpcy5jdXJyZW50SW5kZXg+MSl7XG4gICAgICAgdGhpcy5jdXJyZW50SW5kZXggLS07XG4gICAgfSBcbiAgICBpZih0aGlzLmN1cnJlbnRJbmRleCA8IHRoaXMucGFnZVN0YXJ0KXtcbiAgICAgICB0aGlzLnBhZ2VTdGFydCA9IHRoaXMuY3VycmVudEluZGV4O1xuICAgIH1cbiAgICB0aGlzLnBhZ2luYXRlSXRlbXMoKTtcbiAgfVxuXG4gIG5leHRQYWdlKCl7XG4gICAgaWYodGhpcy5jdXJyZW50SW5kZXggPj0gdGhpcy5wYWdlcykgcmV0dXJuO1xuICAgIGlmKHRoaXMuY3VycmVudEluZGV4ID49IHRoaXMucGFnZU51bWJlcil7XG4gICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggKys7XG4gICAgfVxuICAgIHRoaXMucGFnaW5hdGVJdGVtcygpO1xuICB9XG5cbiAgc2V0UGFnZShpbmRleCA6IG51bWJlcil7XG4gICAgdGhpcy5jdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICB0aGlzLnBhZ2luYXRlSXRlbXMoKTtcbiAgfVxuICBcbiAgRmlsdGVyQnlOYW1lKCl7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmRhdGFUYWJsZVswXSk7XG4gICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gW107XG4gICAgaWYodGhpcy5maWx0ZXJWYWx1ZSAhPSBcIlwiKXtcbiAgICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IHRoaXMuZGF0YVRhYmxlLmZpbHRlcihlID0+IGtleXMuc29tZShlMiA9PiBlW2UyXS5pbmNsdWRlcyh0aGlzLmZpbHRlclZhbHVlKSkpO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gdGhpcy5kYXRhVGFibGU7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsdGVyZWRJdGVtcyk7XG4gICAgdGhpcy5zdGFydCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgRG9DaGVja30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1maWx0ZXInLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJyb3dcIiAqbmdJZj1cImZpbHRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMCBjb2wtc20tNCBjb2wtbWQtNFwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNCBjb2wtc20tNCBjb2wtbWQtNFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+PGkgY2xhc3M9XCJmYSBmYS1zZWFyY2hcIj48L2k+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLlwiIGlkPVwiaW5wdXROYW1lXCIgKGtleXVwKT1cImZpbHRlckZ1bmN0aW9uKClcIiBbKG5nTW9kZWwpXT1cImZpbHRlclZhbHVlXCI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29sLXhzLTAgY29sLXNtLTQgY29sLW1kLTRcIj48L2Rpdj5cbjwvZGl2PlxuPGJyPmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIERvQ2hlY2sge1xuICBASW5wdXQoKSBmaWx0ZXI7XG4gIEBJbnB1dCgpIGZpbHRlckZ1bmN0aW9uO1xuICBwdWJsaWMgZmlsdGVyVmFsdWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbmdEb0NoZWNrKCl7XG4gIFxuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCxPbkluaXQsRG9DaGVjayxJbnB1dCxWaWV3Q2hpbGQsT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2luYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4uL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW5ndWxhcjVUYWJsZScsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInJvd1wiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAxcHg7XCI+XG4gIDxkaXYgY2xhc3M9XCJjb2wteHMtMCBjb2wtc20tMSBjb2wtbWQtMVwiPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29sLXhzLTAgY29sLXNtLTEwIGNvbC1tZC0xMFwiPlxuICAgIDxhcHAtZmlsdGVyXG4gICAgICAjZmlsdGVyVGFibGVcbiAgICAgIFtmaWx0ZXJdPVwiZmlsdGVyXCJcbiAgICAgIFtmaWx0ZXJGdW5jdGlvbl09XCJmaWx0ZXJGdW5jdGlvblwiPlxuICAgIDwvYXBwLWZpbHRlcj5cbiAgICA8YnI+XG4gICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtY29uZGVuc2VkXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPlxuICAgICAgICA8dGhlYWQgY2xhc3M9XCJoZWFkZXItdGFibGVcIj5cbiAgICAgICAgICA8dGggKm5nRm9yPVwibGV0IGtleSBvZiBkYXRhQ29sdW1uXCIgKGNsaWNrKT1cInNvcnQoa2V5KVwiPlxuICAgICAgICAgICAge3trZXl9fVxuICAgICAgICAgICAgPGkgKm5nSWY9XCJvcmRlclR5cGUgJiYgbmFtZUNvbHVtbiA9PT0ga2V5XCIgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPiZ1YXJyOzwvaT5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwiIW9yZGVyVHlwZSAmJiBuYW1lQ29sdW1uID09PSBrZXlcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+JmRhcnI7PC9pPlxuICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9uc1wiPnt7b3B0aW9uLm5hbWV9fTwvdGg+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXM7IGxldCBpPWluZGV4XCI+XG4gICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGtleSBvZiBkYXRhQ29sdW1uXCI+e3tpdGVtW2tleV19fTwvdGQ+XG4gICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zXCI+XG4gICAgICAgICAgICAgIDxpbWcgKm5nSWY9XCJvcHRpb24udHlwZT09PSdpbWcnXCIgc3JjPVwiLi4vYXNzZXRzL3t7b3B0aW9uLnVybH19XCIgY2xhc3M9XCJpbWdcIiAoY2xpY2spPVwiZnVuY3Rpb25EZWZhdWx0KGksb3B0aW9uLm5hbWUsaXRlbXNbaV0sb3B0aW9uKVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwib3B0aW9uLnR5cGU9PT0nYnV0dG9uJ1wiIGNsYXNzPXt7b3B0aW9uLmNsYXNzfX0gKGNsaWNrKT1cImZ1bmN0aW9uRGVmYXVsdChpLG9wdGlvbi5uYW1lLGl0ZW1zW2ldLG9wdGlvbilcIj57e29wdGlvbi5uYW1lfX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKm5nSWY9XCJvcHRpb24udHlwZT09PSd0ZXh0J1wiIGNsYXNzPXt7b3B0aW9uLmNsYXNzfX0+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgICA8YnI+XG4gICAgPGFwcC1wYWdpbmF0aW9uIFxuICAgICAgI3BhZ2luYXRpb25UYWJsZSBcbiAgICAgIFtkYXRhVGFibGVdPVwiZGF0YVRhYmxlXCJcbiAgICAgIFtpdGVtc0ZvclBhZ2VdPVwiaXRlbXNGb3JQYWdlXCJcbiAgICAgIFtwYWdpbmF0aW9uXT1cInBhZ2luYXRpb25cIlxuICAgICAgW2ZpbHRlclZhbHVlXT1cImlucHV0TmFtZVwiPlxuICAgIDwvYXBwLXBhZ2luYXRpb24+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29sLXhzLTAgY29sLXNtLTEgY29sLW1kLTFcIj48L2Rpdj5cbjwvZGl2PlxuXG5gLFxuICBzdHlsZXM6IFtgLmltZ3t3aWR0aDoyMHB4O2hlaWdodDoyMHB4fS5oZWFkZXItdGFibGV7YmFja2dyb3VuZC1jb2xvcjojZjhmOGY4IWltcG9ydGFudH1gXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsRG9DaGVjayB7XG4gIEBWaWV3Q2hpbGQoJ3BhZ2luYXRpb25UYWJsZScpIHBhZ2luYXRpb25Db21wb25lbnQ6IFBhZ2luYXRpb25Db21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ2ZpbHRlclRhYmxlJykgZmlsdGVyQ29tcG9uZW50OiBGaWx0ZXJDb21wb25lbnQ7XG4gIEBJbnB1dCgpIGRhdGFUYWJsZTtcbiAgQElucHV0KCkgZGF0YUNvbHVtbjtcbiAgQElucHV0KCkgaXRlbXNGb3JQYWdlO1xuICBASW5wdXQoKSBwYWdpbmF0aW9uO1xuICBASW5wdXQoKSBvcHRpb25zO1xuICBASW5wdXQoKSBmaWx0ZXI7XG4gIEBJbnB1dCgpIHNvcnRhYmxlO1xuICBASW5wdXQoKSBmdW5jdGlvbkRlZmF1bHQ7XG4gIHB1YmxpYyBpdGVtczogYW55W10gPSBbXTtcbiAgcHVibGljIGNvbHVtc0tleXM6IGFueVtdID0gW107XG4gIHB1YmxpYyBvcmRlclR5cGU6IGJvb2xlYW47XG4gIHB1YmxpYyBuYW1lQ29sdW1uOiBzdHJpbmc7XG4gIHB1YmxpYyBpbnB1dE5hbWU6IHN0cmluZztcbiAgcHVibGljIGZpbHRlckZ1bmN0aW9uOiBGdW5jdGlvbjtcbiAgcHVibGljIG1lcmdlT2JqZWN0OiBhbnlbXSA9IFtdO1xuXG4gIG5nT25Jbml0KCl7XG4gICAgY29uc29sZS5sb2codGhpcy5kYXRhVGFibGUpO1xuICAgIHRoaXMuZmlsdGVyRnVuY3Rpb24gPSB0aGlzLmZpbHRlclRhYmxlLmJpbmQodGhpcyk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKXtcbiAgICB0aGlzLmlucHV0TmFtZSA9IHRoaXMuZmlsdGVyQ29tcG9uZW50LmZpbHRlclZhbHVlO1xuICAgIHRoaXMuaXRlbXMgPSB0aGlzLnBhZ2luYXRpb25Db21wb25lbnQucGFnaW5hdGVkSXRlbXM7XG4gIH1cblxuICBzb3J0KG5hbWVDb2x1bW5QYXJhbTogc3RyaW5nKXtcbiAgICBpZighdGhpcy5zb3J0YWJsZSkgcmV0dXJuO1xuICAgIHRoaXMub3JkZXJUeXBlID0gIXRoaXMub3JkZXJUeXBlOyAvL2NoYW5nZSB0aGUgZGlyZWN0aW9uICAgIFxuICAgIGxldCBkaXJlY3Rpb24gPSB0aGlzLm9yZGVyVHlwZSA/IDEgOiAtMTtcbiAgICB0aGlzLm5hbWVDb2x1bW4gPSBuYW1lQ29sdW1uUGFyYW07XG4gICAgdGhpcy5pdGVtcy5zb3J0KGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgICBpZihhW25hbWVDb2x1bW5QYXJhbV0gPCBiW25hbWVDb2x1bW5QYXJhbV0pe1xuICAgICAgICAgICAgcmV0dXJuIC0xICogZGlyZWN0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoIGFbbmFtZUNvbHVtblBhcmFtXSA+IGJbbmFtZUNvbHVtblBhcmFtXSl7XG4gICAgICAgICAgICByZXR1cm4gMSAqIGRpcmVjdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZpbHRlclRhYmxlKCl7XG4gICAgdGhpcy5wYWdpbmF0aW9uQ29tcG9uZW50LkZpbHRlckJ5TmFtZSgpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7VGFibGVDb21wb25lbnR9IGZyb20gJy4vQW5ndWxhcjUtVGFibGUvdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7RmlsdGVyQ29tcG9uZW50fSBmcm9tICcuL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7UGFnaW5hdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUYWJsZUNvbXBvbmVudCxcbiAgICBGaWx0ZXJDb21wb25lbnQsXG4gICAgUGFnaW5hdGlvbkNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVGFibGVDb21wb25lbnQsXG4gICAgRmlsdGVyQ29tcG9uZW50LFxuICAgIFBhZ2luYXRpb25Db21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyNVRhYmxlTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7OzBCQTBDK0IsQ0FBQzs0QkFDQyxDQUFDO3lCQUVKLENBQUM7Ozs7O0lBRzdCLFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ2Q7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDdEI7Ozs7SUFFRCxlQUFlO1FBQ2IscUJBQUksR0FBRyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDdEIsS0FBSSxxQkFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLEdBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRyxFQUFFO1lBQzVFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FB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