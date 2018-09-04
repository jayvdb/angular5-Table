import { OnInit, DoCheck } from '@angular/core';
export declare class FilterComponent implements OnInit, DoCheck {
    filter: any;
    filterFunction: any;
    filterValue: string;
    constructor();
    ngOnInit(): void;
    ngDoCheck(): void;
}
