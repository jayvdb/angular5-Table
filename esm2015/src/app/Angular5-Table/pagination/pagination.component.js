/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class PaginationComponent {
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
function PaginationComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PaginationComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PaginationComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    PaginationComponent.propDecorators;
    /** @type {?} */
    PaginationComponent.prototype.dataTable;
    /** @type {?} */
    PaginationComponent.prototype.itemsForPage;
    /** @type {?} */
    PaginationComponent.prototype.pagination;
    /** @type {?} */
    PaginationComponent.prototype.filterValue;
    /** @type {?} */
    PaginationComponent.prototype.paginatedItems;
    /** @type {?} */
    PaginationComponent.prototype.pages;
    /** @type {?} */
    PaginationComponent.prototype.pageNumber;
    /** @type {?} */
    PaginationComponent.prototype.currentIndex;
    /** @type {?} */
    PaginationComponent.prototype.pagesIndex;
    /** @type {?} */
    PaginationComponent.prototype.pageStart;
    /** @type {?} */
    PaginationComponent.prototype.filteredItems;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyNS10YWJsZS8iLCJzb3VyY2VzIjpbInNyYy9hcHAvQW5ndWxhcjUtVGFibGUvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBbUIsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBbUNsRSxNQUFNOzswQkFPeUIsQ0FBQzs0QkFDQyxDQUFDO3lCQUVKLENBQUM7Ozs7O0lBRzdCLFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ2Q7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDdEI7Ozs7SUFFRCxlQUFlO1FBQ2IscUJBQUksR0FBRyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDdEIsR0FBRyxDQUFBLENBQUMscUJBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxHQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUcsRUFBRSxDQUFDO1lBQzdFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakI7UUFDRCxNQUFNLENBQUMsR0FBRyxDQUFDO0tBQ1o7Ozs7SUFFRCxhQUFhO1FBQ1gsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQztZQUNuQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDckMsTUFBTSxDQUFDO1NBQ1I7UUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25JLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQzFDOzs7O0lBRUQsUUFBUTtRQUNOLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNyQixJQUFJLENBQUMsWUFBWSxFQUFHLENBQUM7U0FDdkI7UUFDRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUNyQztRQUNELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUN0Qjs7OztJQUVELFFBQVE7UUFDTixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7WUFBQyxNQUFNLENBQUM7UUFDM0MsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQztZQUNuQyxJQUFJLENBQUMsWUFBWSxFQUFHLENBQUM7U0FDMUI7UUFDRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDdEI7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQWM7UUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3RCOzs7O0lBRUQsWUFBWTtRQUNWLHFCQUFJLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BHO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDSixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDckM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDZDs7O1lBMUdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0E0Qlg7Z0JBQ0MsTUFBTSxFQUFFLENBQUMsc1BBQXNQLENBQUM7YUFDalE7Ozs7MEJBRUUsS0FBSzs2QkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LE9uQ2hhbmdlcyxJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlOiBgPGRpdiAqbmdJZj1cInBhZ2luYXRpb25cIj5cbjxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTQgY29sLXNtLTQgY29sLW1kLTRcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTQgY29sLXNtLTQgY29sLW1kLTRcIj5cbiAgICAgICAgPHVsIGNsYXNzPVwicGFnaW5hdGlvbiBwYWdpbmF0aW9uLWNpcmNsZSBwZy1ibHVlIG1iLTAganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgPCEtLUFycm93IGxlZnQtLT5cbiAgICAgICAgICAgIDxsaSBbbmdDbGFzc109XCJ7J3BhZ2UtaXRlbSc6IChjdXJyZW50SW5kZXggPT0gMSB8fCBwYWdlTnVtYmVyID09IDApfVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnZS1saW5rXCIgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCIgKGNsaWNrKT1cInByZXZQYWdlKClcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JmxhcXVvOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwhLS1OdW1iZXJzLS0+XG4gICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IHBhZ2Ugb2YgcGFnZXNJbmRleFwiIFtuZ0NsYXNzXT1cInsncGFnZS1pdGVtIGFjdGl2ZSc6IChjdXJyZW50SW5kZXggPT0gcGFnZSl9XCI+XG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cInNldFBhZ2UocGFnZSlcIiBjbGFzcz1cInBhZ2UtbGlua1wiPnt7cGFnZX19PC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwhLS1BcnJvdyByaWdodC0tPlxuICAgICAgICAgICAgPGxpIFtuZ0NsYXNzXT1cInsncGFnZS1pdGVtJzogKGN1cnJlbnRJbmRleCA9PSBwYWdlTnVtYmVyIHx8IHBhZ2VOdW1iZXIgPT0gMCl9XCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBhcmlhLWxhYmVsPVwiTmV4dFwiIChjbGljayk9XCJuZXh0UGFnZSgpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZyYXF1bzs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPk5leHQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTQgY29sLXNtLTQgY29sLW1kLTRcIj48L2Rpdj5cbjwvZGl2PlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgLnBhZ2luYXRpb24gLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGlua3tiYWNrZ3JvdW5kLWNvbG9yOiMyODI4MjghaW1wb3J0YW50O2NvbG9yOiNmOGY4ZjghaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OjcwMCFpbXBvcnRhbnR9LnBhZ2luYXRpb24gLnBhZ2UtbGlua3ttYXJnaW46MCA1cHg7Ym9yZGVyLXJhZGl1czo1cHh9LnBhZ2luYXRpb24gLnBhZ2UtbGluazpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmOGY4ZjghaW1wb3J0YW50fWBdXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkYXRhVGFibGU7XG4gIEBJbnB1dCgpIGl0ZW1zRm9yUGFnZTtcbiAgQElucHV0KCkgcGFnaW5hdGlvbjtcbiAgQElucHV0KCkgZmlsdGVyVmFsdWU7ICBcbiAgcHVibGljIHBhZ2luYXRlZEl0ZW1zOiBhbnlbXTtcbiAgcHVibGljIHBhZ2VzOiBudW1iZXI7XG4gIHB1YmxpYyBwYWdlTnVtYmVyIDogbnVtYmVyID0gMTtcbiAgcHVibGljIGN1cnJlbnRJbmRleCA6IG51bWJlciA9IDE7XG4gIHB1YmxpYyBwYWdlc0luZGV4IDogQXJyYXk8bnVtYmVyPjtcbiAgcHVibGljIHBhZ2VTdGFydCA6IG51bWJlciA9IDE7XG4gIHB1YmxpYyBmaWx0ZXJlZEl0ZW1zOiBhbnlbXTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSB0aGlzLmRhdGFUYWJsZTtcbiAgICB0aGlzLnN0YXJ0KCk7XG4gIH1cblxuICBzdGFydCgpe1xuICAgIHRoaXMucGFnZXMgPSBNYXRoLmNlaWwodGhpcy5maWx0ZXJlZEl0ZW1zLmxlbmd0aCAvIHRoaXMuaXRlbXNGb3JQYWdlKTtcbiAgICB0aGlzLnBhZ2luYXRlSXRlbXMoKTtcbiAgfVxuICBcbiAgcGFnaW5hdGlvbkFycmF5KCk6IGFueXtcbiAgICB2YXIgb2JqID0gbmV3IEFycmF5KCk7XG4gICAgZm9yKHZhciBpbmRleCA9IHRoaXMucGFnZVN0YXJ0OyBpbmRleDwgdGhpcy5wYWdlU3RhcnQgKyB0aGlzLnBhZ2VzOyBpbmRleCArKykge1xuICAgICAgb2JqLnB1c2goaW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgcGFnaW5hdGVJdGVtcygpe1xuICAgIGlmKCF0aGlzLnBhZ2luYXRpb24pe1xuICAgICAgdGhpcy5wYWdpbmF0ZWRJdGVtcyA9IHRoaXMuZGF0YVRhYmxlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnBhZ2luYXRlZEl0ZW1zID0gdGhpcy5maWx0ZXJlZEl0ZW1zLnNsaWNlKCh0aGlzLmN1cnJlbnRJbmRleCAtIDEpICogdGhpcy5pdGVtc0ZvclBhZ2UsIHRoaXMuY3VycmVudEluZGV4ICogdGhpcy5pdGVtc0ZvclBhZ2UpOy8vdGhpcy5jdXJyZW50SW5kZXggKiB0aGlzLml0ZW1zRm9yUGFnZSwgdGhpcy5jdXJyZW50SW5kZXggKiB0aGlzLml0ZW1zRm9yUGFnZSArIHRoaXMuaXRlbXNGb3JQYWdlXG4gICAgdGhpcy5wYWdlc0luZGV4ID0gdGhpcy5wYWdpbmF0aW9uQXJyYXkoKTtcbiAgfVxuXG4gIHByZXZQYWdlKCl7XG4gICAgaWYodGhpcy5jdXJyZW50SW5kZXg+MSl7XG4gICAgICAgdGhpcy5jdXJyZW50SW5kZXggLS07XG4gICAgfSBcbiAgICBpZih0aGlzLmN1cnJlbnRJbmRleCA8IHRoaXMucGFnZVN0YXJ0KXtcbiAgICAgICB0aGlzLnBhZ2VTdGFydCA9IHRoaXMuY3VycmVudEluZGV4O1xuICAgIH1cbiAgICB0aGlzLnBhZ2luYXRlSXRlbXMoKTtcbiAgfVxuXG4gIG5leHRQYWdlKCl7XG4gICAgaWYodGhpcy5jdXJyZW50SW5kZXggPj0gdGhpcy5wYWdlcykgcmV0dXJuO1xuICAgIGlmKHRoaXMuY3VycmVudEluZGV4ID49IHRoaXMucGFnZU51bWJlcil7XG4gICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggKys7XG4gICAgfVxuICAgIHRoaXMucGFnaW5hdGVJdGVtcygpO1xuICB9XG5cbiAgc2V0UGFnZShpbmRleCA6IG51bWJlcil7XG4gICAgdGhpcy5jdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICB0aGlzLnBhZ2luYXRlSXRlbXMoKTtcbiAgfVxuICBcbiAgRmlsdGVyQnlOYW1lKCl7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmRhdGFUYWJsZVswXSk7XG4gICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gW107XG4gICAgaWYodGhpcy5maWx0ZXJWYWx1ZSAhPSBcIlwiKXtcbiAgICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IHRoaXMuZGF0YVRhYmxlLmZpbHRlcihlID0+IGtleXMuc29tZShlMiA9PiBlW2UyXS5pbmNsdWRlcyh0aGlzLmZpbHRlclZhbHVlKSkpO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gdGhpcy5kYXRhVGFibGU7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsdGVyZWRJdGVtcyk7XG4gICAgdGhpcy5zdGFydCgpO1xuICB9XG59XG4iXX0=