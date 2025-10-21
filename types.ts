import React from 'react';

export interface TourPackage {
  id: string;
  name: string;
  duration: string;
  price: number;
  image: string;
  destinationsCovered: string[];
  highlights: string[];
  category: 'Honeymoon' | 'Family' | 'Adventure' | 'Cultural';
}

export interface Testimonial {
  name: string;
  location: string;
  tour: string;
  review: string;
  image: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
}

export interface Flight {
  id: string;
  airline: string;
  airlineLogo: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  stops: number;
}

export interface Destination {
  name: string;
  tagline: string;
  image: string;
}