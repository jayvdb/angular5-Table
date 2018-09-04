import { OnInit } from '@angular/core';
export declare class PaginationComponent implements OnInit {
    dataTable: any;
    itemsForPage: any;
    pagination: any;
    filterValue: any;
    paginatedItems: any[];
    pages: number;
    pageNumber: number;
    currentIndex: number;
    pagesIndex: Array<number>;
    pageStart: number;
    filteredItems: any[];
    ngOnInit(): void;
    start(): void;
    paginationArray(): any;
    paginateItems(): void;
    prevPage(): void;
    nextPage(): void;
    setPage(index: number): void;
    FilterByName(): void;
}
