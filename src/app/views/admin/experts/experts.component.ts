import {Component, OnInit} from '@angular/core';
import {TableComponent} from "../../../components/table/table.component";
import {Apollo} from "apollo-angular";
import {MatTableDataSource} from "@angular/material/table";
import {Profile} from "../../../model/client.model";
import {UserService} from "../../../services/userService";

@Component({
  selector: 'app-experts',
  standalone: true,
    imports: [
        TableComponent
    ],
  templateUrl: './experts.component.html',
  styleUrl: './experts.component.css'
})
export class ExpertsComponent implements OnInit{

  data :any= []
  dataSource: any;
  displayedColumns: string[]  = [ 'select','id','fullName','email','dateOfBirth','location','bio', 'actions'];
  availableColumns: string[]  = [ 'select','id','fullName','email','dateOfBirth','location','bio', 'actions'];
  actions = ['edit', 'delete'];

  constructor( private userService: UserService) {
  }

  ngOnInit(): void {
    this.dataGethering();
  }

  private dataGethering() {
    this.userService.dataGethering('expert').subscribe((dataSource) => {
      this.dataSource = dataSource;
    });
  }

}
