export enum Amenity {
  Wifi = 'Wifi',
  Pool = 'Pool',
  Parking = 'Parking',
  Restaurant = 'Restaurant',
  PetFriendly = 'Pet-Friendly',
  Gym = 'Gym',
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  rating: number;
  pricePerNight: number;
  description: string;
  amenities: Amenity[];
  images: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string; // Password is used for storage, but should not be exposed in context
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