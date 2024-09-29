import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Observable} from "rxjs";
import {GET_USER_PROFILES} from "../../../graphql/user.graphql";
import {MatTableDataSource} from "@angular/material/table";
import {Apollo} from "apollo-angular";
import {GET_DATES} from "../../../graphql/dates.graphql";

@Component({
  selector: 'app-date',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './date.component.html',
  styleUrl: './date.component.css'
})
export class DateComponent implements OnInit {
  loveDates = [
    {
      id: 1,
      title: 'Anniversary',
      date: '02.14.2024',
      description: 'Celebrating our wedding anniversary.',
      location: 'Paris, France',
      reminder: true,
      imageUrl: 'https://picsum.photos/200/300',
      type: 'Anniversary',
      notes: 'Book a table at the Eiffel Tower restaurant.',
      isRecurring: true,
      importance: 'High',
      giftIdeas: ['Jewelry', 'Romantic Dinner', 'Weekend Getaway'],
      time: '19:00',
    },
    {
      id: 2,
      title: 'First Date',
      date: '03.01.2024',
      description: 'Remembering the day we first met at the cafe.',
      location: 'Downtown Cafe, New York',
      reminder: true,
      imageUrl: 'https://example.com/first-date.jpg',
      type: 'Milestone',
      notes: 'Order the same coffee we had that day.',
      isRecurring: true,
      importance: 'High',
      giftIdeas: ['Flowers', 'Handwritten Letter'],
      time: '15:00',
    },
    {
      id: 3,
      title: 'Proposal Day',
      date: '04.10.2024',
      description: 'The day I asked you to be mine forever.',
      location: 'Sunset Beach, California',
      reminder: true,
      imageUrl: 'https://example.com/proposal-day.jpg',
      type: 'Milestone',
      notes: 'Recreate the moment with a sunset dinner.',
      isRecurring: false,
      importance: 'High',
      giftIdeas: ['Engraved Jewelry', 'Memory Book'],
      time: '18:30',
    },
    {
      id: 4,
      title: 'Wedding Day',
      date: '06.15.2024',
      description: 'The day we became one.',
      location: 'St. Paul’s Church, London',
      reminder: true,
      imageUrl: 'https://example.com/wedding-day.jpg',
      type: 'Anniversary',
      notes: 'Watch our wedding video together.',
      isRecurring: true,
      importance: 'Very High',
      giftIdeas: ['Anniversary Band', 'Weekend Getaway'],
      time: '12:00',
    },
    {
      id: 5,
      title: 'Partner’s Birthday',
      date: '07.04.2024',
      description: 'Celebrating your special day.',
      location: 'Home',
      reminder: true,
      imageUrl: 'https://example.com/partner-birthday.jpg',
      type: 'Special Occasion',
      notes: 'Surprise with breakfast in bed.',
      isRecurring: true,
      importance: 'Very High',
      giftIdeas: ['Personalized Gift', 'Surprise Party'],
      time: '08:00',
    },
    {
      id: 6,
      title: 'First Kiss Anniversary',
      date: '08.22.2024',
      description: 'The magical moment we first kissed.',
      location: 'City Park',
      reminder: true,
      imageUrl: 'https://example.com/first-kiss.jpg',
      type: 'Milestone',
      notes: 'Revisit the spot where it all began.',
      isRecurring: true,
      importance: 'High',
      giftIdeas: ['Framed Photo', 'Romantic Dinner'],
      time: '20:00',
    },
    {
      id: 7,
      title: 'First I Love You',
      date: '09.30.2024',
      description: 'The first time we expressed our love.',
      location: 'Mountain Cabin',
      reminder: true,
      imageUrl: 'https://example.com/first-i-love-you.jpg',
      type: 'Milestone',
      notes: 'Plan a cozy evening with a campfire.',
      isRecurring: false,
      importance: 'High',
      giftIdeas: ['Love Letter', 'Customized Jewelry'],
      time: '21:00',
    },
    {
      id: 8,
      title: 'Engagement Anniversary',
      date: '10.20.2024',
      description: 'Remembering the day we got engaged.',
      location: 'Rooftop Restaurant',
      reminder: true,
      imageUrl: 'https://example.com/engagement-anniversary.jpg',
      type: 'Anniversary',
      notes: 'Plan a surprise dinner.',
      isRecurring: true,
      importance: 'High',
      giftIdeas: ['Engagement Ring Upgrade', 'Surprise Getaway'],
      time: '19:00',
    },
    {
      id: 9,
      title: 'First Trip Together',
      date: '11.05.2024',
      description: 'Our first adventure together.',
      location: 'Paris, France',
      reminder: true,
      imageUrl: 'https://example.com/first-trip.jpg',
      type: 'Milestone',
      notes: 'Plan a weekend trip.',
      isRecurring: false,
      importance: 'Medium',
      giftIdeas: ['Travel Scrapbook', 'Matching Travel Gear'],
      time: '10:00',
    },
    {
      id: 10,
      title: 'Moving In Together',
      date: '12.12.2024',
      description: 'The day we made our house a home.',
      location: 'Our Home',
      reminder: true,
      imageUrl: 'https://example.com/moving-in.jpg',
      type: 'Milestone',
      notes: 'Plan a home-cooked dinner.',
      isRecurring: true,
      importance: 'High',
      giftIdeas: ['Home Decor', 'Personalized Keychain'],
      time: '18:00',
    },
  ];
  data :any= []

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.dataGethering();
  }

  private dataGethering() {
    this.apollo.watchQuery({
      query: GET_DATES,
    }).valueChanges.subscribe(({ data, error }: any) => {
      if (error) {
        console.error('Error fetching data:', error);
        return;
      }
      console.log('DATES map:', data);
      this.data = data.importantDates.map((date: {
        id: string;
        title: string;
        description: string;
        date: string;
        location: string;
        notes: string;
        user?: any;
      }) => ({
        id: date.id,
        title: date.title, // Map username to fullName
        description: date.description,
        role: date.user.role,
        date: date.date,
        username: date.user.username,
        location: date.location,
        notes: date.notes,
      }));
      console.log('Transformed date data:', this.data);
      // this.dataSource = new MatTableDataSource<Profile>(this.data);
    });
  }}
