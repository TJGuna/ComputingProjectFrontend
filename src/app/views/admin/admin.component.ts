import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-admin',
  standalone: true,
    imports: [
        RouterOutlet,
        RouterLink,
        NgClass,
        RouterLinkActive,
        NgIf
    ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  mobileSidebar = false;
  assessmentCondition: boolean=false;
  configCondition: boolean=false;
  employeeCondition: boolean=false;
  ClientsCondition: boolean=false;
  profile:boolean=false;
  expertCondition=false;

}
