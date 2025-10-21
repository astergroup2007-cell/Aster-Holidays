export interface TourPackage {
  id: string;
  name: string;
  duration: string;
  price: number;
  image: string;
  destinationsCovered: string[];
  highlights: string[];
  category: 'Family' | 'Honeymoon' | 'Adventure' | 'Cultural';
}

export interface Destination {
  name: string;
  tagline: string;
  image: string;
}

export interface Testimonial {
  name: string;
  tour: string;
  review: string;
  image: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string; // Password is optional as we omit it
}

export interface Flight {
  id: string;
  airline: string;
  airlineLogo: string;
  origin: string; // e.g., 'DEL'
  destination: string; // e.g., 'BOM'
  departureTime: string; // e.g., '08:30'
  arrivalTime: string; // e.g., '10:45'
  duration: string; // e.g., '2h 15m'
  stops: number;
  price: number;
}
