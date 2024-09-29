import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  daysInRelationship: number = 500; // Example value
  daysUntilMilestone: number = 100; // Example value
  anniversaryDate: string = '02.14.2024'; // Example value
  specialDateTitle: string = 'First Date Anniversary'; // Example value
  specialDate: string = '04.07.2024'; // Example value
  reminders: string[] = [
    'Buy flowers for anniversary',
    'Book a restaurant for dinner',
    'Prepare a surprise gift'
  ];
}
