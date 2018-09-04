import { OnInit, DoCheck } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';
import { FilterComponent } from '../filter/filter.component';
export declare class TableComponent implements OnInit, DoCheck {
    paginationComponent: PaginationComponent;
    filterComponent: FilterComponent;
    dataTable: any;
    dataColumn: any;
    itemsForPage: any;
    pagination: any;
    options: any;
    filter: any;
    sortable: any;
    functionDefault: any;
    items: any[];
    columsKeys: any[];
    orderType: boolean;
    nameColumn: string;
    inputName: string;
    filterFunction: Function;
    mergeObject: any[];
    ngOnInit(): void;
    ngDoCheck(): void;
    sort(nameColumnParam: string): void;
    filterTable(): void;
}
