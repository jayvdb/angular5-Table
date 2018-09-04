/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
var FilterComponent = (function () {
    function FilterComponent() {
    }
    /**
     * @return {?}
     */
    FilterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FilterComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
    };
    FilterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-filter',
                    template: "<div class=\"row\" *ngIf=\"filter\">\n    <div class=\"col-xs-0 col-sm-4 col-md-4\"></div>\n    <div class=\"col-xs-4 col-sm-4 col-md-4\">\n      <div class=\"input-group\">\n        <div class=\"input-group mb-2\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\"><i class=\"fa fa-search\"></i></div>\n          </div>\n          <input class=\"form-control\" placeholder=\"Search..\" id=\"inputName\" (keyup)=\"filterFunction()\" [(ngModel)]=\"filterValue\">\n        </div>\n    </div>\n  <div class=\"col-xs-0 col-sm-4 col-md-4\"></div>\n</div>\n<br>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    FilterComponent.ctorParameters = function () { return []; };
    FilterComponent.propDecorators = {
        "filter": [{ type: Input },],
        "filterFunction": [{ type: Input },],
    };
    return FilterComponent;
}());
export { FilterComponent };
function FilterComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FilterComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FilterComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    FilterComponent.propDecorators;
    /** @type {?} */
    FilterComponent.prototype.filter;
    /** @type {?} */
    FilterComponent.prototype.filterFunction;
    /** @type {?} */
    FilterComponent.prototype.filterValue;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXI1LXRhYmxlLyIsInNvdXJjZXMiOlsic3JjL2FwcC9Bbmd1bGFyNS1UYWJsZS9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQXdCLE1BQU0sZUFBZSxDQUFDOztJQXlCN0U7S0FBaUI7Ozs7SUFFakIsa0NBQVE7OztJQUFSO0tBQ0M7Ozs7SUFFRCxtQ0FBUzs7O0lBQVQ7S0FFQzs7Z0JBOUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLHVsQkFhUDtvQkFDSCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ2I7Ozs7OzJCQUVFLEtBQUs7bUNBQ0wsS0FBSzs7MEJBdEJSOztTQW9CYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIERvQ2hlY2t9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZmlsdGVyJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwicm93XCIgKm5nSWY9XCJmaWx0ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTAgY29sLXNtLTQgY29sLW1kLTRcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTQgY29sLXNtLTQgY29sLW1kLTRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWItMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPjxpIGNsYXNzPVwiZmEgZmEtc2VhcmNoXCI+PC9pPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi5cIiBpZD1cImlucHV0TmFtZVwiIChrZXl1cCk9XCJmaWx0ZXJGdW5jdGlvbigpXCIgWyhuZ01vZGVsKV09XCJmaWx0ZXJWYWx1ZVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbC14cy0wIGNvbC1zbS00IGNvbC1tZC00XCI+PC9kaXY+XG48L2Rpdj5cbjxicj5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBEb0NoZWNrIHtcbiAgQElucHV0KCkgZmlsdGVyO1xuICBASW5wdXQoKSBmaWx0ZXJGdW5jdGlvbjtcbiAgcHVibGljIGZpbHRlclZhbHVlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nRG9DaGVjaygpe1xuICBcbiAgfVxuXG59XG4iXX0=