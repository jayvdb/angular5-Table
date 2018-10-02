import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {TableComponent} from './table/table.component';
import {FilterComponent} from './filter/filter.component';
import {PaginationComponent} from './pagination/pagination.component';

@NgModule({
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
})
export class Angular5TableModule { }
