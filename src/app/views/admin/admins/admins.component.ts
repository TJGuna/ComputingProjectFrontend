import {Component, OnInit} from '@angular/core';
import {TableComponent} from "../../../components/table/table.component";
import {Apollo} from "apollo-angular";
import {GET_USER_PROFILES} from "../../../graphql/user.graphql";
import {MatTableDataSource} from "@angular/material/table";
import {Profile} from "../../../model/client.model";
import {UserService} from "../../../services/userService";

@Component({
  selector: 'app-admins',
  standalone: true,
    imports: [
        TableComponent
    ],
  templateUrl: './admins.component.html',
  styleUrl: './admins.component.css'
})
export class AdminsComponent  implements OnInit{
  data :any= []
  dataSource: any;
  displayedColumns: string[]  = [ 'select','id','fullName','email','dateOfBirth','location','role','bio', 'actions'];
  availableColumns: string[]  = [ 'select','id','fullName','email','dateOfBirth','location','role','bio', 'actions'];
  actions = ['edit', 'delete'];

  constructor( private userService: UserService) {
  }

  ngOnInit(): void {
    this.dataGethering();
  }

  private dataGethering() {
    this.userService.dataGethering('admin').subscribe((dataSource) => {
      this.dataSource = dataSource;
    });
  }

}
