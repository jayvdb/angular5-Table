/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class FilterComponent {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXI1LXRhYmxlLyIsInNvdXJjZXMiOlsic3JjL2FwcC9Bbmd1bGFyNS1UYWJsZS9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBb0IvRSxNQUFNO0lBS0osaUJBQWlCOzs7O0lBRWpCLFFBQVE7S0FDUDs7OztJQUVELFNBQVM7S0FFUjs7O1lBOUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7O0tBYVA7Z0JBQ0gsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ2I7Ozs7O3VCQUVFLEtBQUs7K0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBEb0NoZWNrfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWZpbHRlcicsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInJvd1wiICpuZ0lmPVwiZmlsdGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC14cy0wIGNvbC1zbS00IGNvbC1tZC00XCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC14cy00IGNvbC1zbS00IGNvbC1tZC00XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj48aSBjbGFzcz1cImZhIGZhLXNlYXJjaFwiPjwvaT48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uXCIgaWQ9XCJpbnB1dE5hbWVcIiAoa2V5dXApPVwiZmlsdGVyRnVuY3Rpb24oKVwiIFsobmdNb2RlbCldPVwiZmlsdGVyVmFsdWVcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjb2wteHMtMCBjb2wtc20tNCBjb2wtbWQtNFwiPjwvZGl2PlxuPC9kaXY+XG48YnI+YCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRG9DaGVjayB7XG4gIEBJbnB1dCgpIGZpbHRlcjtcbiAgQElucHV0KCkgZmlsdGVyRnVuY3Rpb247XG4gIHB1YmxpYyBmaWx0ZXJWYWx1ZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuZ0RvQ2hlY2soKXtcbiAgXG4gIH1cblxufVxuIl19