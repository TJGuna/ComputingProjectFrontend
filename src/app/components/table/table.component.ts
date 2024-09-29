import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {CommonModule} from "@angular/common";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {MatCheckbox} from "@angular/material/checkbox";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MatIcon} from "@angular/material/icon";
import {MatSort, MatSortModule} from "@angular/material/sort";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatDialog, MatDialogActions, MatDialogClose, MatDialogContent} from "@angular/material/dialog";
import {ComponentType} from "@angular/cdk/overlay";
import {MatInput, MatLabel} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
// import {TableApiService} from "../../services/table-api.service";


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    MatRowDef,
    MatRow,
    MatHeaderRow,
    MatHeaderRowDef,
    MatCellDef,
    MatCell,
    MatHeaderCell,
    MatHeaderCellDef,
    MatColumnDef,
    MatCheckbox,
    MatTable,
    MatIcon,
    MatSortModule,
    MatPaginatorModule,
    MatInput,
    MatIconButton,
    MatLabel,
    MatOption,
    MatSelect,
    MatDialogContent,
    MatDialogClose,
    MatDialogActions,
    MatButton
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableComponent  implements OnInit,AfterViewInit {
  // @Input() tableTitle!: string;
  @Input() tableTitle: any[] = [];
  @Input() createButtonLabel: any;
  @Input() createComponent: ComponentType<any> | undefined ;
  @Input() dataModel: any ;
  @Input() dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  @Input() displayedColumns: string[]=[];
  @Input() availableColumns:string[]= [];
  @Input() CardColumnsList:string[]= [];
  @Input() actions:string[]= [];
  @Input() tableHeader:any[]= [];
  @Input() isHeader = true;
  @Output() forwardValueChange = new EventEmitter<any>();
  @Output() backwardValueChange = new EventEmitter<any>();
  @Output() deleteClicked: EventEmitter<number> = new EventEmitter<number>();
  @Output() editClicked: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild('deleteDialog', { static: true }) deleteDialog!: TemplateRef<any>;

  extendedDisplayedColumns :any[]=[];
  expandedElement: any;
  selection = new SelectionModel<any>(true, []);

  isAction: boolean = false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort ;
  constructor(public dialog: MatDialog,) {
    // console.log('this is the table component'+JSON.stringify(this.dataSource))

  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }
  openDialog() {
    if(this.createComponent !== undefined) {
      const dialogRef = this.dialog.open(this.createComponent);
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }


  edit(Id: number) {
    console.log('this is the id edit : '+Id);
    this.editClicked.emit(Id);
  }
  view(Id: number) {
    console.log('this is the id edit : '+Id);
  }
  download(Id: number) {
    console.log('this is the id edit : '+Id);
  }
  // delete(id:number) {
  //   console.log('this is the id delete : '+id);
  //   this.deleteClicked.emit(id);
  // }
  delete(id: number) {
    const dialogRef = this.dialog.open(this.deleteDialog, {
      width: '300px',
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        console.log('this is the id delete : ' + id);
        this.deleteClicked.emit(id);
      }
    });
  }

  extendedColumns(){
    this.extendedDisplayedColumns = [];
    for(let i of this.displayedColumns){
      if (!this.displayedColumns.includes(i)){
        this.extendedDisplayedColumns.push(i);
      }
    }
    console.log('extended list: ',this.extendedDisplayedColumns)
  }

  moveForward(value:any) {
    console.log('this is the id moveForward : '+JSON.stringify(value));
    this.forwardValueChange.emit(value);
  }

  moveBackward(value:any) {
    console.log('this is the id backward : '+JSON.stringify(value));
    this.backwardValueChange.emit(value);
  }


  formatHead(input: string): string {
    return input.replace(/([a-z])([A-Z])/g, '$1  $2');
  }

}
