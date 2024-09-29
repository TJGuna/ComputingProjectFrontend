import {Component, OnInit} from '@angular/core';
import {TableComponent} from "../../../components/table/table.component";
import {Apollo} from "apollo-angular";
import { GET_USER_PROFILES} from "../../../graphql/user.graphql";
import {MatTableDataSource} from "@angular/material/table";
import {Profile} from "../../../model/client.model";
import {UserService} from "../../../services/userService";

@Component({
  selector: 'app-clients',
  standalone: true,
    imports: [
        TableComponent
    ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent implements OnInit{
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
    this.userService.dataGethering('user').subscribe((dataSource) => {
      this.dataSource = dataSource;
    });
  }

}
