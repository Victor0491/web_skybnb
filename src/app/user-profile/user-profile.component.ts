import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [RouterLink, CommonModule,MatExpansionModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: any = {
    name: 'John Doe',
    lastName: 'Smith',
    email: 'john.doe@email.com'
  };
  accommodations: any[] = [
    {
      title: 'Cozy Apartment in Downtown',
      description: 'A charming one-bedroom apartment in the heart of the city.',
      location: 'New York, NY',
      pricePerNight: 100
    },
    {
      title: 'Beachfront Villa with Pool',
      description: 'Relax and enjoy the ocean views from this luxurious villa.',
      location: 'Miami, FL',
      pricePerNight: 250
    }
  ];
  reservations: any[] = [
    {
      title: 'Cozy Apartment in Downtown',
      startDate: '2024-06-01',
      endDate: '2024-06-05'
    },
    {
      title: 'Beachfront Villa with Pool',
      startDate: '2024-07-10',
      endDate: '2024-07-15'
    }
  ];

  constructor() { }

  ngOnInit() { }
}

