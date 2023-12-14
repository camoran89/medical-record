import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

import { v4 as uuidv4 } from 'uuid';

import { CustomPaginatorIntl } from './paginator';

import { Table } from '../../models/table';

@Component({
  selector: 'generic-table',
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.scss',
  providers: [{ provide: MatPaginatorIntl, useClass: CustomPaginatorIntl }],
})
export class GenericTableComponent implements OnInit {

  @ViewChild('InputField')
  inputField!: ElementRef;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  @Input()
  table!: Table;

  @Output()
  action: EventEmitter<any> = new EventEmitter<any>();

  id!: string;
  value!: string;

  elements: Array<number> = new Array<number>();

  dataSource!: MatTableDataSource<any>;

  selection: SelectionModel<any> = new SelectionModel<any>(true, []);

  displayedColumns: Array<string> = new Array<string>();

  constructor(private cdRef: ChangeDetectorRef) {
    this.id = uuidv4();
  }

  ngOnInit() {
    this.value = "";
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  ngAfterViewInit() {
    this.displayedColumns = this.displayedColumns.concat(this.table.columns.map(x => x.columnDef));

    this.displayedColumns.push("action");

    this.dataSource = new MatTableDataSource(this.table.dataset);

    this.dataSource.paginator = this.paginator;

    this.dataSource.sort = this.sort;
  }

  onTableAction(event: any): void {
    this.action.emit(event);
  }

  applyFilter(event: Event): void {
    let filterValue = this.inputField.nativeElement.value;

    this.value = filterValue;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getPaginationSize(): Array<number> {
    this.elements = new Array<number>();

    if (this.dataSource) {
      let n = this.getDatasetLength();

      this.elements = [Math.round(0.125 * n), Math.round(0.250 * n), Math.round(0.375 * n), Math.round(0.500 * n)];
    }

    return this.elements;
  }

  getInitPagination(): number {
    let n = this.getDatasetLength();

    if (this.dataSource) {
      return Math.round(0.125 * n);
    }
    return 1;
  }

  private getDatasetLength(): number {
    return this.dataSource ? this.dataSource.filteredData.length : 1;
  }

  onEditClick(row: any): void {

  }

  onDeleteClick(row: any): void {

  }
}
