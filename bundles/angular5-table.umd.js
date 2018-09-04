(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('angular5-table', ['exports', '@angular/core', '@angular/common', '@angular/forms'], factory) :
    (factory((global['angular5-table'] = {}),global.ng.core,global.ng.common,global.ng.forms));
}(this, (function (exports,core,common,forms) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TableComponent = (function () {
        function TableComponent() {
            this.items = [];
            this.columsKeys = [];
            this.mergeObject = [];
        }
        /**
         * @return {?}
         */
        TableComponent.prototype.ngOnInit =
            function () {
                console.log(this.dataTable);
                this.filterFunction = this.filterTable.bind(this);
            };
        /**
         * @return {?}
         */
        TableComponent.prototype.ngDoCheck =
            function () {
                this.inputName = this.filterComponent.filterValue;
                this.items = this.paginationComponent.paginatedItems;
            };
        /**
         * @param {?} nameColumnParam
         * @return {?}
         */
        TableComponent.prototype.sort =
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
        TableComponent.prototype.filterTable =
            function () {
                this.paginationComponent.FilterByName();
            };
        TableComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'angular5Table',
                        template: "<div class=\"row\" style=\"margin-right: 1px;\">\n  <div class=\"col-xs-0 col-sm-1 col-md-1\"></div>\n  <div class=\"col-xs-0 col-sm-10 col-md-10\">\n    <app-filter\n      #filterTable\n      [filter]=\"filter\"\n      [filterFunction]=\"filterFunction\">\n    </app-filter>\n    <br>\n    <table class=\"table table-bordered table-condensed\" style=\"text-align:center\">\n        <thead class=\"header-table\">\n          <th *ngFor=\"let key of dataColumn\" (click)=\"sort(key)\">\n            {{key}}\n            <i *ngIf=\"orderType && nameColumn === key\" class=\"material-icons\">&uarr;</i>\n            <i *ngIf=\"!orderType && nameColumn === key\" class=\"material-icons\">&darr;</i>\n          </th>\n          <th *ngFor=\"let option of options\">{{option.name}}</th>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of items; let i=index\">\n            <td *ngFor=\"let key of dataColumn\">{{item[key]}}</td>\n            <td *ngFor=\"let option of options\">\n              <img *ngIf=\"option.type==='img'\" src=\"../assets/{{option.url}}\" class=\"img\" (click)=\"functionDefault(i,option.name,items[i],option)\">\n              <button *ngIf=\"option.type==='button'\" class={{option.class}} (click)=\"functionDefault(i,option.name,items[i],option)\">{{option.name}}</button>\n              <input type=\"text\" *ngIf=\"option.type==='text'\" class={{option.class}}>\n            </td>\n          </tr>\n        </tbody>\n    </table>\n    <br>\n    <app-pagination \n      #paginationTable \n      [dataTable]=\"dataTable\"\n      [itemsForPage]=\"itemsForPage\"\n      [pagination]=\"pagination\"\n      [filterValue]=\"inputName\">\n    </app-pagination>\n  </div>\n  <div class=\"col-xs-0 col-sm-1 col-md-1\"></div>\n</div>\n\n",
                        styles: [".img{width:20px;height:20px}.header-table{background-color:#f8f8f8!important}"],
                    },] },
        ];
        /** @nocollapse */
        TableComponent.propDecorators = {
            "paginationComponent": [{ type: core.ViewChild, args: ['paginationTable',] },],
            "filterComponent": [{ type: core.ViewChild, args: ['filterTable',] },],
            "dataTable": [{ type: core.Input },],
            "dataColumn": [{ type: core.Input },],
            "itemsForPage": [{ type: core.Input },],
            "pagination": [{ type: core.Input },],
            "options": [{ type: core.Input },],
            "filter": [{ type: core.Input },],
            "sortable": [{ type: core.Input },],
            "functionDefault": [{ type: core.Input },],
        };
        return TableComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FilterComponent = (function () {
        function FilterComponent() {
        }
        /**
         * @return {?}
         */
        FilterComponent.prototype.ngOnInit =
            function () {
            };
        /**
         * @return {?}
         */
        FilterComponent.prototype.ngDoCheck =
            function () {
            };
        FilterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-filter',
                        template: "<div class=\"row\" *ngIf=\"filter\">\n    <div class=\"col-xs-0 col-sm-4 col-md-4\"></div>\n    <div class=\"col-xs-4 col-sm-4 col-md-4\">\n      <div class=\"input-group\">\n        <div class=\"input-group mb-2\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\"><i class=\"fa fa-search\"></i></div>\n          </div>\n          <input class=\"form-control\" placeholder=\"Search..\" id=\"inputName\" (keyup)=\"filterFunction()\" [(ngModel)]=\"filterValue\">\n        </div>\n    </div>\n  <div class=\"col-xs-0 col-sm-4 col-md-4\"></div>\n</div>\n<br>",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        FilterComponent.ctorParameters = function () { return []; };
        FilterComponent.propDecorators = {
            "filter": [{ type: core.Input },],
            "filterFunction": [{ type: core.Input },],
        };
        return FilterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var PaginationComponent = (function () {
        function PaginationComponent() {
            this.pageNumber = 1;
            this.currentIndex = 1;
            this.pageStart = 1;
        }
        /**
         * @return {?}
         */
        PaginationComponent.prototype.ngOnInit =
            function () {
                this.filteredItems = this.dataTable;
                this.start();
            };
        /**
         * @return {?}
         */
        PaginationComponent.prototype.start =
            function () {
                this.pages = Math.ceil(this.filteredItems.length / this.itemsForPage);
                this.paginateItems();
            };
        /**
         * @return {?}
         */
        PaginationComponent.prototype.paginationArray =
            function () {
                var /** @type {?} */ obj = new Array();
                for (var /** @type {?} */ index = this.pageStart; index < this.pageStart + this.pages; index++) {
                    obj.push(index);
                }
                return obj;
            };
        /**
         * @return {?}
         */
        PaginationComponent.prototype.paginateItems =
            function () {
                if (!this.pagination) {
                    this.paginatedItems = this.dataTable;
                    return;
                }
                this.paginatedItems = this.filteredItems.slice((this.currentIndex - 1) * this.itemsForPage, this.currentIndex * this.itemsForPage); //this.currentIndex * this.itemsForPage, this.currentIndex * this.itemsForPage + this.itemsForPage
                this.pagesIndex = this.paginationArray();
            };
        /**
         * @return {?}
         */
        PaginationComponent.prototype.prevPage =
            function () {
                if (this.currentIndex > 1) {
                    this.currentIndex--;
                }
                if (this.currentIndex < this.pageStart) {
                    this.pageStart = this.currentIndex;
                }
                this.paginateItems();
            };
        /**
         * @return {?}
         */
        PaginationComponent.prototype.nextPage =
            function () {
                if (this.currentIndex >= this.pages)
                    return;
                if (this.currentIndex >= this.pageNumber) {
                    this.currentIndex++;
                }
                this.paginateItems();
            };
        /**
         * @param {?} index
         * @return {?}
         */
        PaginationComponent.prototype.setPage =
            function (index) {
                this.currentIndex = index;
                this.paginateItems();
            };
        /**
         * @return {?}
         */
        PaginationComponent.prototype.FilterByName =
            function () {
                var _this = this;
                var /** @type {?} */ keys = Object.keys(this.dataTable[0]);
                this.filteredItems = [];
                if (this.filterValue != "") {
                    this.filteredItems = this.dataTable.filter(function (e) { return keys.some(function (e2) { return e[e2].includes(_this.filterValue); }); });
                }
                else {
                    this.filteredItems = this.dataTable;
                }
                console.log(this.filteredItems);
                this.start();
            };
        PaginationComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-pagination',
                        template: "<div *ngIf=\"pagination\">\n<div class=\"row\">\n    <div class=\"col-xs-4 col-sm-4 col-md-4\"></div>\n    <div class=\"col-xs-4 col-sm-4 col-md-4\">\n        <ul class=\"pagination pagination-circle pg-blue mb-0 justify-content-center\">\n            <!--Arrow left-->\n            <li [ngClass]=\"{'page-item': (currentIndex == 1 || pageNumber == 0)}\">\n                <a class=\"page-link\" aria-label=\"Previous\" (click)=\"prevPage()\">\n                    <span aria-hidden=\"true\">&laquo;</span>\n                    <span class=\"sr-only\">Previous</span>\n                </a>\n            </li>\n            <!--Numbers-->\n            <li *ngFor=\"let page of pagesIndex\" [ngClass]=\"{'page-item active': (currentIndex == page)}\">\n                <a (click)=\"setPage(page)\" class=\"page-link\">{{page}}</a>\n            </li>\n            <!--Arrow right-->\n            <li [ngClass]=\"{'page-item': (currentIndex == pageNumber || pageNumber == 0)}\">\n                <a class=\"page-link\" aria-label=\"Next\" (click)=\"nextPage()\">\n                    <span aria-hidden=\"true\">&raquo;</span>\n                    <span class=\"sr-only\">Next</span>\n                </a>\n            </li>\n        </ul>\n    </div>\n    <div class=\"col-xs-4 col-sm-4 col-md-4\"></div>\n</div>\n</div>\n",
                        styles: [".pagination .page-item.active .page-link{background-color:#282828!important;color:#f8f8f8!important;font-weight:700!important}.pagination .page-link{margin:0 5px;border-radius:5px}.pagination .page-link:hover{background-color:#f8f8f8!important}"]
                    },] },
        ];
        /** @nocollapse */
        PaginationComponent.propDecorators = {
            "dataTable": [{ type: core.Input },],
            "itemsForPage": [{ type: core.Input },],
            "pagination": [{ type: core.Input },],
            "filterValue": [{ type: core.Input },],
        };
        return PaginationComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Angular5TableModule = (function () {
        function Angular5TableModule() {
        }
        Angular5TableModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule
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
        return Angular5TableModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.Angular5TableModule = Angular5TableModule;
    exports.ɵa = TableComponent;
    exports.ɵb = FilterComponent;
    exports.ɵc = PaginationComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjUtdGFibGUudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd1bGFyNS10YWJsZS9zcmMvYXBwL0FuZ3VsYXI1LVRhYmxlL0FuZ3VsYXI1LVRhYmxlL3RhYmxlLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhcjUtdGFibGUvc3JjL2FwcC9Bbmd1bGFyNS1UYWJsZS9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhcjUtdGFibGUvc3JjL2FwcC9Bbmd1bGFyNS1UYWJsZS9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyNS10YWJsZS9zcmMvYXBwL0FuZ3VsYXI1LVRhYmxlL2FuZ3VsYXI1LXRhYmxlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsT25Jbml0LERvQ2hlY2ssSW5wdXQsVmlld0NoaWxkLE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuLi9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FuZ3VsYXI1VGFibGUnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDogMXB4O1wiPlxuICA8ZGl2IGNsYXNzPVwiY29sLXhzLTAgY29sLXNtLTEgY29sLW1kLTFcIj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbC14cy0wIGNvbC1zbS0xMCBjb2wtbWQtMTBcIj5cbiAgICA8YXBwLWZpbHRlclxuICAgICAgI2ZpbHRlclRhYmxlXG4gICAgICBbZmlsdGVyXT1cImZpbHRlclwiXG4gICAgICBbZmlsdGVyRnVuY3Rpb25dPVwiZmlsdGVyRnVuY3Rpb25cIj5cbiAgICA8L2FwcC1maWx0ZXI+XG4gICAgPGJyPlxuICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWNvbmRlbnNlZFwiIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXJcIj5cbiAgICAgICAgPHRoZWFkIGNsYXNzPVwiaGVhZGVyLXRhYmxlXCI+XG4gICAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBrZXkgb2YgZGF0YUNvbHVtblwiIChjbGljayk9XCJzb3J0KGtleSlcIj5cbiAgICAgICAgICAgIHt7a2V5fX1cbiAgICAgICAgICAgIDxpICpuZ0lmPVwib3JkZXJUeXBlICYmIG5hbWVDb2x1bW4gPT09IGtleVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj4mdWFycjs8L2k+XG4gICAgICAgICAgICA8aSAqbmdJZj1cIiFvcmRlclR5cGUgJiYgbmFtZUNvbHVtbiA9PT0ga2V5XCIgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPiZkYXJyOzwvaT5cbiAgICAgICAgICA8L3RoPlxuICAgICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnNcIj57e29wdGlvbi5uYW1lfX08L3RoPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zOyBsZXQgaT1pbmRleFwiPlxuICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBrZXkgb2YgZGF0YUNvbHVtblwiPnt7aXRlbVtrZXldfX08L3RkPlxuICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9uc1wiPlxuICAgICAgICAgICAgICA8aW1nICpuZ0lmPVwib3B0aW9uLnR5cGU9PT0naW1nJ1wiIHNyYz1cIi4uL2Fzc2V0cy97e29wdGlvbi51cmx9fVwiIGNsYXNzPVwiaW1nXCIgKGNsaWNrKT1cImZ1bmN0aW9uRGVmYXVsdChpLG9wdGlvbi5uYW1lLGl0ZW1zW2ldLG9wdGlvbilcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIm9wdGlvbi50eXBlPT09J2J1dHRvbidcIiBjbGFzcz17e29wdGlvbi5jbGFzc319IChjbGljayk9XCJmdW5jdGlvbkRlZmF1bHQoaSxvcHRpb24ubmFtZSxpdGVtc1tpXSxvcHRpb24pXCI+e3tvcHRpb24ubmFtZX19PC9idXR0b24+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICpuZ0lmPVwib3B0aW9uLnR5cGU9PT0ndGV4dCdcIiBjbGFzcz17e29wdGlvbi5jbGFzc319PlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICAgPGJyPlxuICAgIDxhcHAtcGFnaW5hdGlvbiBcbiAgICAgICNwYWdpbmF0aW9uVGFibGUgXG4gICAgICBbZGF0YVRhYmxlXT1cImRhdGFUYWJsZVwiXG4gICAgICBbaXRlbXNGb3JQYWdlXT1cIml0ZW1zRm9yUGFnZVwiXG4gICAgICBbcGFnaW5hdGlvbl09XCJwYWdpbmF0aW9uXCJcbiAgICAgIFtmaWx0ZXJWYWx1ZV09XCJpbnB1dE5hbWVcIj5cbiAgICA8L2FwcC1wYWdpbmF0aW9uPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbC14cy0wIGNvbC1zbS0xIGNvbC1tZC0xXCI+PC9kaXY+XG48L2Rpdj5cblxuYCxcbiAgc3R5bGVzOiBbYC5pbWd7d2lkdGg6MjBweDtoZWlnaHQ6MjBweH0uaGVhZGVyLXRhYmxle2JhY2tncm91bmQtY29sb3I6I2Y4ZjhmOCFpbXBvcnRhbnR9YF0sXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LERvQ2hlY2sge1xuICBAVmlld0NoaWxkKCdwYWdpbmF0aW9uVGFibGUnKSBwYWdpbmF0aW9uQ29tcG9uZW50OiBQYWdpbmF0aW9uQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKCdmaWx0ZXJUYWJsZScpIGZpbHRlckNvbXBvbmVudDogRmlsdGVyQ29tcG9uZW50O1xuICBASW5wdXQoKSBkYXRhVGFibGU7XG4gIEBJbnB1dCgpIGRhdGFDb2x1bW47XG4gIEBJbnB1dCgpIGl0ZW1zRm9yUGFnZTtcbiAgQElucHV0KCkgcGFnaW5hdGlvbjtcbiAgQElucHV0KCkgb3B0aW9ucztcbiAgQElucHV0KCkgZmlsdGVyO1xuICBASW5wdXQoKSBzb3J0YWJsZTtcbiAgQElucHV0KCkgZnVuY3Rpb25EZWZhdWx0O1xuICBwdWJsaWMgaXRlbXM6IGFueVtdID0gW107XG4gIHB1YmxpYyBjb2x1bXNLZXlzOiBhbnlbXSA9IFtdO1xuICBwdWJsaWMgb3JkZXJUeXBlOiBib29sZWFuO1xuICBwdWJsaWMgbmFtZUNvbHVtbjogc3RyaW5nO1xuICBwdWJsaWMgaW5wdXROYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBmaWx0ZXJGdW5jdGlvbjogRnVuY3Rpb247XG4gIHB1YmxpYyBtZXJnZU9iamVjdDogYW55W10gPSBbXTtcblxuICBuZ09uSW5pdCgpe1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YVRhYmxlKTtcbiAgICB0aGlzLmZpbHRlckZ1bmN0aW9uID0gdGhpcy5maWx0ZXJUYWJsZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgbmdEb0NoZWNrKCl7XG4gICAgdGhpcy5pbnB1dE5hbWUgPSB0aGlzLmZpbHRlckNvbXBvbmVudC5maWx0ZXJWYWx1ZTtcbiAgICB0aGlzLml0ZW1zID0gdGhpcy5wYWdpbmF0aW9uQ29tcG9uZW50LnBhZ2luYXRlZEl0ZW1zO1xuICB9XG5cbiAgc29ydChuYW1lQ29sdW1uUGFyYW06IHN0cmluZyl7XG4gICAgaWYoIXRoaXMuc29ydGFibGUpIHJldHVybjtcbiAgICB0aGlzLm9yZGVyVHlwZSA9ICF0aGlzLm9yZGVyVHlwZTsgLy9jaGFuZ2UgdGhlIGRpcmVjdGlvbiAgICBcbiAgICBsZXQgZGlyZWN0aW9uID0gdGhpcy5vcmRlclR5cGUgPyAxIDogLTE7XG4gICAgdGhpcy5uYW1lQ29sdW1uID0gbmFtZUNvbHVtblBhcmFtO1xuICAgIHRoaXMuaXRlbXMuc29ydChmdW5jdGlvbihhLCBiKXtcbiAgICAgICAgaWYoYVtuYW1lQ29sdW1uUGFyYW1dIDwgYltuYW1lQ29sdW1uUGFyYW1dKXtcbiAgICAgICAgICAgIHJldHVybiAtMSAqIGRpcmVjdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCBhW25hbWVDb2x1bW5QYXJhbV0gPiBiW25hbWVDb2x1bW5QYXJhbV0pe1xuICAgICAgICAgICAgcmV0dXJuIDEgKiBkaXJlY3Rpb247XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXJUYWJsZSgpe1xuICAgIHRoaXMucGFnaW5hdGlvbkNvbXBvbmVudC5GaWx0ZXJCeU5hbWUoKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgRG9DaGVja30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1maWx0ZXInLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJyb3dcIiAqbmdJZj1cImZpbHRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMCBjb2wtc20tNCBjb2wtbWQtNFwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNCBjb2wtc20tNCBjb2wtbWQtNFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+PGkgY2xhc3M9XCJmYSBmYS1zZWFyY2hcIj48L2k+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLlwiIGlkPVwiaW5wdXROYW1lXCIgKGtleXVwKT1cImZpbHRlckZ1bmN0aW9uKClcIiBbKG5nTW9kZWwpXT1cImZpbHRlclZhbHVlXCI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29sLXhzLTAgY29sLXNtLTQgY29sLW1kLTRcIj48L2Rpdj5cbjwvZGl2PlxuPGJyPmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIERvQ2hlY2sge1xuICBASW5wdXQoKSBmaWx0ZXI7XG4gIEBJbnB1dCgpIGZpbHRlckZ1bmN0aW9uO1xuICBwdWJsaWMgZmlsdGVyVmFsdWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbmdEb0NoZWNrKCl7XG4gIFxuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LE9uQ2hhbmdlcyxJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlOiBgPGRpdiAqbmdJZj1cInBhZ2luYXRpb25cIj5cbjxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTQgY29sLXNtLTQgY29sLW1kLTRcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTQgY29sLXNtLTQgY29sLW1kLTRcIj5cbiAgICAgICAgPHVsIGNsYXNzPVwicGFnaW5hdGlvbiBwYWdpbmF0aW9uLWNpcmNsZSBwZy1ibHVlIG1iLTAganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgPCEtLUFycm93IGxlZnQtLT5cbiAgICAgICAgICAgIDxsaSBbbmdDbGFzc109XCJ7J3BhZ2UtaXRlbSc6IChjdXJyZW50SW5kZXggPT0gMSB8fCBwYWdlTnVtYmVyID09IDApfVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnZS1saW5rXCIgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCIgKGNsaWNrKT1cInByZXZQYWdlKClcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JmxhcXVvOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwhLS1OdW1iZXJzLS0+XG4gICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IHBhZ2Ugb2YgcGFnZXNJbmRleFwiIFtuZ0NsYXNzXT1cInsncGFnZS1pdGVtIGFjdGl2ZSc6IChjdXJyZW50SW5kZXggPT0gcGFnZSl9XCI+XG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cInNldFBhZ2UocGFnZSlcIiBjbGFzcz1cInBhZ2UtbGlua1wiPnt7cGFnZX19PC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwhLS1BcnJvdyByaWdodC0tPlxuICAgICAgICAgICAgPGxpIFtuZ0NsYXNzXT1cInsncGFnZS1pdGVtJzogKGN1cnJlbnRJbmRleCA9PSBwYWdlTnVtYmVyIHx8IHBhZ2VOdW1iZXIgPT0gMCl9XCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBhcmlhLWxhYmVsPVwiTmV4dFwiIChjbGljayk9XCJuZXh0UGFnZSgpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZyYXF1bzs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPk5leHQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTQgY29sLXNtLTQgY29sLW1kLTRcIj48L2Rpdj5cbjwvZGl2PlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgLnBhZ2luYXRpb24gLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGlua3tiYWNrZ3JvdW5kLWNvbG9yOiMyODI4MjghaW1wb3J0YW50O2NvbG9yOiNmOGY4ZjghaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OjcwMCFpbXBvcnRhbnR9LnBhZ2luYXRpb24gLnBhZ2UtbGlua3ttYXJnaW46MCA1cHg7Ym9yZGVyLXJhZGl1czo1cHh9LnBhZ2luYXRpb24gLnBhZ2UtbGluazpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmOGY4ZjghaW1wb3J0YW50fWBdXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkYXRhVGFibGU7XG4gIEBJbnB1dCgpIGl0ZW1zRm9yUGFnZTtcbiAgQElucHV0KCkgcGFnaW5hdGlvbjtcbiAgQElucHV0KCkgZmlsdGVyVmFsdWU7ICBcbiAgcHVibGljIHBhZ2luYXRlZEl0ZW1zOiBhbnlbXTtcbiAgcHVibGljIHBhZ2VzOiBudW1iZXI7XG4gIHB1YmxpYyBwYWdlTnVtYmVyIDogbnVtYmVyID0gMTtcbiAgcHVibGljIGN1cnJlbnRJbmRleCA6IG51bWJlciA9IDE7XG4gIHB1YmxpYyBwYWdlc0luZGV4IDogQXJyYXk8bnVtYmVyPjtcbiAgcHVibGljIHBhZ2VTdGFydCA6IG51bWJlciA9IDE7XG4gIHB1YmxpYyBmaWx0ZXJlZEl0ZW1zOiBhbnlbXTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSB0aGlzLmRhdGFUYWJsZTtcbiAgICB0aGlzLnN0YXJ0KCk7XG4gIH1cblxuICBzdGFydCgpe1xuICAgIHRoaXMucGFnZXMgPSBNYXRoLmNlaWwodGhpcy5maWx0ZXJlZEl0ZW1zLmxlbmd0aCAvIHRoaXMuaXRlbXNGb3JQYWdlKTtcbiAgICB0aGlzLnBhZ2luYXRlSXRlbXMoKTtcbiAgfVxuICBcbiAgcGFnaW5hdGlvbkFycmF5KCk6IGFueXtcbiAgICB2YXIgb2JqID0gbmV3IEFycmF5KCk7XG4gICAgZm9yKHZhciBpbmRleCA9IHRoaXMucGFnZVN0YXJ0OyBpbmRleDwgdGhpcy5wYWdlU3RhcnQgKyB0aGlzLnBhZ2VzOyBpbmRleCArKykge1xuICAgICAgb2JqLnB1c2goaW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgcGFnaW5hdGVJdGVtcygpe1xuICAgIGlmKCF0aGlzLnBhZ2luYXRpb24pe1xuICAgICAgdGhpcy5wYWdpbmF0ZWRJdGVtcyA9IHRoaXMuZGF0YVRhYmxlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnBhZ2luYXRlZEl0ZW1zID0gdGhpcy5maWx0ZXJlZEl0ZW1zLnNsaWNlKCh0aGlzLmN1cnJlbnRJbmRleCAtIDEpICogdGhpcy5pdGVtc0ZvclBhZ2UsIHRoaXMuY3VycmVudEluZGV4ICogdGhpcy5pdGVtc0ZvclBhZ2UpOy8vdGhpcy5jdXJyZW50SW5kZXggKiB0aGlzLml0ZW1zRm9yUGFnZSwgdGhpcy5jdXJyZW50SW5kZXggKiB0aGlzLml0ZW1zRm9yUGFnZSArIHRoaXMuaXRlbXNGb3JQYWdlXG4gICAgdGhpcy5wYWdlc0luZGV4ID0gdGhpcy5wYWdpbmF0aW9uQXJyYXkoKTtcbiAgfVxuXG4gIHByZXZQYWdlKCl7XG4gICAgaWYodGhpcy5jdXJyZW50SW5kZXg+MSl7XG4gICAgICAgdGhpcy5jdXJyZW50SW5kZXggLS07XG4gICAgfSBcbiAgICBpZih0aGlzLmN1cnJlbnRJbmRleCA8IHRoaXMucGFnZVN0YXJ0KXtcbiAgICAgICB0aGlzLnBhZ2VTdGFydCA9IHRoaXMuY3VycmVudEluZGV4O1xuICAgIH1cbiAgICB0aGlzLnBhZ2luYXRlSXRlbXMoKTtcbiAgfVxuXG4gIG5leHRQYWdlKCl7XG4gICAgaWYodGhpcy5jdXJyZW50SW5kZXggPj0gdGhpcy5wYWdlcykgcmV0dXJuO1xuICAgIGlmKHRoaXMuY3VycmVudEluZGV4ID49IHRoaXMucGFnZU51bWJlcil7XG4gICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggKys7XG4gICAgfVxuICAgIHRoaXMucGFnaW5hdGVJdGVtcygpO1xuICB9XG5cbiAgc2V0UGFnZShpbmRleCA6IG51bWJlcil7XG4gICAgdGhpcy5jdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICB0aGlzLnBhZ2luYXRlSXRlbXMoKTtcbiAgfVxuICBcbiAgRmlsdGVyQnlOYW1lKCl7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmRhdGFUYWJsZVswXSk7XG4gICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gW107XG4gICAgaWYodGhpcy5maWx0ZXJWYWx1ZSAhPSBcIlwiKXtcbiAgICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IHRoaXMuZGF0YVRhYmxlLmZpbHRlcihlID0+IGtleXMuc29tZShlMiA9PiBlW2UyXS5pbmNsdWRlcyh0aGlzLmZpbHRlclZhbHVlKSkpO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gdGhpcy5kYXRhVGFibGU7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsdGVyZWRJdGVtcyk7XG4gICAgdGhpcy5zdGFydCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQge1RhYmxlQ29tcG9uZW50fSBmcm9tICcuL0FuZ3VsYXI1LVRhYmxlL3RhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQge0ZpbHRlckNvbXBvbmVudH0gZnJvbSAnLi9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge1BhZ2luYXRpb25Db21wb25lbnR9IGZyb20gJy4vcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGFibGVDb21wb25lbnQsXG4gICAgRmlsdGVyQ29tcG9uZW50LFxuICAgIFBhZ2luYXRpb25Db21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRhYmxlQ29tcG9uZW50LFxuICAgIEZpbHRlckNvbXBvbmVudCxcbiAgICBQYWdpbmF0aW9uQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhcjVUYWJsZU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJWaWV3Q2hpbGQiLCJJbnB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiRm9ybXNNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7eUJBNkR3QixFQUFFOzhCQUNHLEVBQUU7K0JBS0QsRUFBRTs7Ozs7UUFFOUIsaUNBQVE7WUFBUjtnQkFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuRDs7OztRQUVELGtDQUFTO1lBQVQ7Z0JBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDO2FBQ3REOzs7OztRQUVELDZCQUFJO1lBQUosVUFBSyxlQUF1QjtnQkFDMUIsSUFBRyxDQUFDLElBQUksQ0FBQyxRQUFRO29CQUFFLE9BQU87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