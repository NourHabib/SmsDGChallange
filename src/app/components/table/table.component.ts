import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {

  @Input() data: any;
  @Input() displayedColumns: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;


  startDate = new FormControl(new Date('2010-01-01'));
  endDate = new FormControl(new Date('2016-01-01'));

  constructor() {}

  ngOnInit() {
  }
  ngOnChanges(){
    this.dataSource = new MatTableDataSource<any>(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter() {
    let tempdata = this.data.filter(item => {
       return  (moment(item.start_date,'M/D/YYYY').isAfter(this.startDate.value) &&
        (moment(item.end_date,'M/D/YYYY').isBefore(this.endDate.value)));
    });
    this.dataSource = new MatTableDataSource<any>(tempdata);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
