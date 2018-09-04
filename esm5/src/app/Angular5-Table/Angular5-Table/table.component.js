/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, ViewChild } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';
import { FilterComponent } from '../filter/filter.component';
var TableComponent = (function () {
    function TableComponent() {
        this.items = [];
        this.columsKeys = [];
        this.mergeObject = [];
    }
    /**
     * @return {?}
     */
    TableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log(this.dataTable);
        this.filterFunction = this.filterTable.bind(this);
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        this.inputName = this.filterComponent.filterValue;
        this.items = this.paginationComponent.paginatedItems;
    };
    /**
     * @param {?} nameColumnParam
     * @return {?}
     */
    TableComponent.prototype.sort = /**
     * @param {?} nameColumnParam
     * @return {?}
     */
    function (nameColumnParam) {
        if (!this.sortable)
            return;
        this.orderType = !this.orderType; //change the direction
        var /** @type {?} */ direction = this.orderType ? 1 : -1;
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
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.filterTable = /**
     * @return {?}
     */
    function () {
        this.paginationComponent.FilterByName();
    };
    TableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'angular5Table',
                    template: "<div class=\"row\" style=\"margin-right: 1px;\">\n  <div class=\"col-xs-0 col-sm-1 col-md-1\"></div>\n  <div class=\"col-xs-0 col-sm-10 col-md-10\">\n    <app-filter\n      #filterTable\n      [filter]=\"filter\"\n      [filterFunction]=\"filterFunction\">\n    </app-filter>\n    <br>\n    <table class=\"table table-bordered table-condensed\" style=\"text-align:center\">\n        <thead class=\"header-table\">\n          <th *ngFor=\"let key of dataColumn\" (click)=\"sort(key)\">\n            {{key}}\n            <i *ngIf=\"orderType && nameColumn === key\" class=\"material-icons\">&uarr;</i>\n            <i *ngIf=\"!orderType && nameColumn === key\" class=\"material-icons\">&darr;</i>\n          </th>\n          <th *ngFor=\"let option of options\">{{option.name}}</th>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of items; let i=index\">\n            <td *ngFor=\"let key of dataColumn\">{{item[key]}}</td>\n            <td *ngFor=\"let option of options\">\n              <img *ngIf=\"option.type==='img'\" src=\"../assets/{{option.url}}\" class=\"img\" (click)=\"functionDefault(i,option.name,items[i],option)\">\n              <button *ngIf=\"option.type==='button'\" class={{option.class}} (click)=\"functionDefault(i,option.name,items[i],option)\">{{option.name}}</button>\n              <input type=\"text\" *ngIf=\"option.type==='text'\" class={{option.class}}>\n            </td>\n          </tr>\n        </tbody>\n    </table>\n    <br>\n    <app-pagination \n      #paginationTable \n      [dataTable]=\"dataTable\"\n      [itemsForPage]=\"itemsForPage\"\n      [pagination]=\"pagination\"\n      [filterValue]=\"inputName\">\n    </app-pagination>\n  </div>\n  <div class=\"col-xs-0 col-sm-1 col-md-1\"></div>\n</div>\n\n",
                    styles: [".img{width:20px;height:20px}.header-table{background-color:#f8f8f8!important}"],
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
    return TableComponent;
}());
export { TableComponent };
function TableComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TableComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TableComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TableComponent.propDecorators;
    /** @type {?} */
    TableComponent.prototype.paginationComponent;
    /** @type {?} */
    TableComponent.prototype.filterComponent;
    /** @type {?} */
    TableComponent.prototype.dataTable;
    /** @type {?} */
    TableComponent.prototype.dataColumn;
    /** @type {?} */
    TableComponent.prototype.itemsForPage;
    /** @type {?} */
    TableComponent.prototype.pagination;
    /** @type {?} */
    TableComponent.prototype.options;
    /** @type {?} */
    TableComponent.prototype.filter;
    /** @type {?} */
    TableComponent.prototype.sortable;
    /** @type {?} */
    TableComponent.prototype.functionDefault;
    /** @type {?} */
    TableComponent.prototype.items;
    /** @type {?} */
    TableComponent.prototype.columsKeys;
    /** @type {?} */
    TableComponent.prototype.orderType;
    /** @type {?} */
    TableComponent.prototype.nameColumn;
    /** @type {?} */
    TableComponent.prototype.inputName;
    /** @type {?} */
    TableComponent.prototype.filterFunction;
    /** @type {?} */
    TableComponent.prototype.mergeObject;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcjUtdGFibGUvIiwic291cmNlcyI6WyJzcmMvYXBwL0FuZ3VsYXI1LVRhYmxlL0FuZ3VsYXI1LVRhYmxlL3RhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsS0FBSyxFQUFDLFNBQVMsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7cUJBMkRyQyxFQUFFOzBCQUNHLEVBQUU7MkJBS0QsRUFBRTs7Ozs7SUFFOUIsaUNBQVE7OztJQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNuRDs7OztJQUVELGtDQUFTOzs7SUFBVDtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7UUFDbEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDO0tBQ3REOzs7OztJQUVELDZCQUFJOzs7O0lBQUosVUFBSyxlQUF1QjtRQUMxQixFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFBQyxNQUFNLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDakMscUJBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVMsQ0FBQyxFQUFFLENBQUM7WUFDekIsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQ3hDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUM7YUFDekI7WUFDRCxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQzlDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO2FBQ3hCO1lBQ0QsSUFBSSxDQUFBLENBQUM7Z0JBQ0QsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUNaO1NBQ0osQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxvQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDekM7O2dCQS9GRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSwydURBeUNYO29CQUNDLE1BQU0sRUFBRSxDQUFDLCtFQUErRSxDQUFDO2lCQUMxRjs7Ozt3Q0FFRSxTQUFTLFNBQUMsaUJBQWlCO29DQUMzQixTQUFTLFNBQUMsYUFBYTs4QkFDdkIsS0FBSzsrQkFDTCxLQUFLO2lDQUNMLEtBQUs7K0JBQ0wsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7NkJBQ0wsS0FBSztvQ0FDTCxLQUFLOzt5QkE1RFI7O1NBa0RhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsT25Jbml0LERvQ2hlY2ssSW5wdXQsVmlld0NoaWxkLE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuLi9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FuZ3VsYXI1VGFibGUnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDogMXB4O1wiPlxuICA8ZGl2IGNsYXNzPVwiY29sLXhzLTAgY29sLXNtLTEgY29sLW1kLTFcIj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbC14cy0wIGNvbC1zbS0xMCBjb2wtbWQtMTBcIj5cbiAgICA8YXBwLWZpbHRlclxuICAgICAgI2ZpbHRlclRhYmxlXG4gICAgICBbZmlsdGVyXT1cImZpbHRlclwiXG4gICAgICBbZmlsdGVyRnVuY3Rpb25dPVwiZmlsdGVyRnVuY3Rpb25cIj5cbiAgICA8L2FwcC1maWx0ZXI+XG4gICAgPGJyPlxuICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWNvbmRlbnNlZFwiIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXJcIj5cbiAgICAgICAgPHRoZWFkIGNsYXNzPVwiaGVhZGVyLXRhYmxlXCI+XG4gICAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBrZXkgb2YgZGF0YUNvbHVtblwiIChjbGljayk9XCJzb3J0KGtleSlcIj5cbiAgICAgICAgICAgIHt7a2V5fX1cbiAgICAgICAgICAgIDxpICpuZ0lmPVwib3JkZXJUeXBlICYmIG5hbWVDb2x1bW4gPT09IGtleVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj4mdWFycjs8L2k+XG4gICAgICAgICAgICA8aSAqbmdJZj1cIiFvcmRlclR5cGUgJiYgbmFtZUNvbHVtbiA9PT0ga2V5XCIgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPiZkYXJyOzwvaT5cbiAgICAgICAgICA8L3RoPlxuICAgICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnNcIj57e29wdGlvbi5uYW1lfX08L3RoPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zOyBsZXQgaT1pbmRleFwiPlxuICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBrZXkgb2YgZGF0YUNvbHVtblwiPnt7aXRlbVtrZXldfX08L3RkPlxuICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9uc1wiPlxuICAgICAgICAgICAgICA8aW1nICpuZ0lmPVwib3B0aW9uLnR5cGU9PT0naW1nJ1wiIHNyYz1cIi4uL2Fzc2V0cy97e29wdGlvbi51cmx9fVwiIGNsYXNzPVwiaW1nXCIgKGNsaWNrKT1cImZ1bmN0aW9uRGVmYXVsdChpLG9wdGlvbi5uYW1lLGl0ZW1zW2ldLG9wdGlvbilcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIm9wdGlvbi50eXBlPT09J2J1dHRvbidcIiBjbGFzcz17e29wdGlvbi5jbGFzc319IChjbGljayk9XCJmdW5jdGlvbkRlZmF1bHQoaSxvcHRpb24ubmFtZSxpdGVtc1tpXSxvcHRpb24pXCI+e3tvcHRpb24ubmFtZX19PC9idXR0b24+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICpuZ0lmPVwib3B0aW9uLnR5cGU9PT0ndGV4dCdcIiBjbGFzcz17e29wdGlvbi5jbGFzc319PlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICAgPGJyPlxuICAgIDxhcHAtcGFnaW5hdGlvbiBcbiAgICAgICNwYWdpbmF0aW9uVGFibGUgXG4gICAgICBbZGF0YVRhYmxlXT1cImRhdGFUYWJsZVwiXG4gICAgICBbaXRlbXNGb3JQYWdlXT1cIml0ZW1zRm9yUGFnZVwiXG4gICAgICBbcGFnaW5hdGlvbl09XCJwYWdpbmF0aW9uXCJcbiAgICAgIFtmaWx0ZXJWYWx1ZV09XCJpbnB1dE5hbWVcIj5cbiAgICA8L2FwcC1wYWdpbmF0aW9uPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbC14cy0wIGNvbC1zbS0xIGNvbC1tZC0xXCI+PC9kaXY+XG48L2Rpdj5cblxuYCxcbiAgc3R5bGVzOiBbYC5pbWd7d2lkdGg6MjBweDtoZWlnaHQ6MjBweH0uaGVhZGVyLXRhYmxle2JhY2tncm91bmQtY29sb3I6I2Y4ZjhmOCFpbXBvcnRhbnR9YF0sXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LERvQ2hlY2sge1xuICBAVmlld0NoaWxkKCdwYWdpbmF0aW9uVGFibGUnKSBwYWdpbmF0aW9uQ29tcG9uZW50OiBQYWdpbmF0aW9uQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKCdmaWx0ZXJUYWJsZScpIGZpbHRlckNvbXBvbmVudDogRmlsdGVyQ29tcG9uZW50O1xuICBASW5wdXQoKSBkYXRhVGFibGU7XG4gIEBJbnB1dCgpIGRhdGFDb2x1bW47XG4gIEBJbnB1dCgpIGl0ZW1zRm9yUGFnZTtcbiAgQElucHV0KCkgcGFnaW5hdGlvbjtcbiAgQElucHV0KCkgb3B0aW9ucztcbiAgQElucHV0KCkgZmlsdGVyO1xuICBASW5wdXQoKSBzb3J0YWJsZTtcbiAgQElucHV0KCkgZnVuY3Rpb25EZWZhdWx0O1xuICBwdWJsaWMgaXRlbXM6IGFueVtdID0gW107XG4gIHB1YmxpYyBjb2x1bXNLZXlzOiBhbnlbXSA9IFtdO1xuICBwdWJsaWMgb3JkZXJUeXBlOiBib29sZWFuO1xuICBwdWJsaWMgbmFtZUNvbHVtbjogc3RyaW5nO1xuICBwdWJsaWMgaW5wdXROYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBmaWx0ZXJGdW5jdGlvbjogRnVuY3Rpb247XG4gIHB1YmxpYyBtZXJnZU9iamVjdDogYW55W10gPSBbXTtcblxuICBuZ09uSW5pdCgpe1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YVRhYmxlKTtcbiAgICB0aGlzLmZpbHRlckZ1bmN0aW9uID0gdGhpcy5maWx0ZXJUYWJsZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgbmdEb0NoZWNrKCl7XG4gICAgdGhpcy5pbnB1dE5hbWUgPSB0aGlzLmZpbHRlckNvbXBvbmVudC5maWx0ZXJWYWx1ZTtcbiAgICB0aGlzLml0ZW1zID0gdGhpcy5wYWdpbmF0aW9uQ29tcG9uZW50LnBhZ2luYXRlZEl0ZW1zO1xuICB9XG5cbiAgc29ydChuYW1lQ29sdW1uUGFyYW06IHN0cmluZyl7XG4gICAgaWYoIXRoaXMuc29ydGFibGUpIHJldHVybjtcbiAgICB0aGlzLm9yZGVyVHlwZSA9ICF0aGlzLm9yZGVyVHlwZTsgLy9jaGFuZ2UgdGhlIGRpcmVjdGlvbiAgICBcbiAgICBsZXQgZGlyZWN0aW9uID0gdGhpcy5vcmRlclR5cGUgPyAxIDogLTE7XG4gICAgdGhpcy5uYW1lQ29sdW1uID0gbmFtZUNvbHVtblBhcmFtO1xuICAgIHRoaXMuaXRlbXMuc29ydChmdW5jdGlvbihhLCBiKXtcbiAgICAgICAgaWYoYVtuYW1lQ29sdW1uUGFyYW1dIDwgYltuYW1lQ29sdW1uUGFyYW1dKXtcbiAgICAgICAgICAgIHJldHVybiAtMSAqIGRpcmVjdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCBhW25hbWVDb2x1bW5QYXJhbV0gPiBiW25hbWVDb2x1bW5QYXJhbV0pe1xuICAgICAgICAgICAgcmV0dXJuIDEgKiBkaXJlY3Rpb247XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXJUYWJsZSgpe1xuICAgIHRoaXMucGFnaW5hdGlvbkNvbXBvbmVudC5GaWx0ZXJCeU5hbWUoKTtcbiAgfVxuXG59XG4iXX0=