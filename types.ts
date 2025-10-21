// types.ts

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string; // Should not be sent to client
}

export interface Destination {
  name: string;
  image: string;
  tagline: string;
}

export interface TourPackage {
  id: string;
  name:string;
  duration: string;
  price: number;
  image: string;
  destinationsCovered: string[];
  highlights: string[];
  category: 'Family' | 'Honeymoon' | 'Cultural' | 'Adventure';
  itinerary?: ItineraryDay[];
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  image: string;
  review: string;
  tour: string;
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

export interface Hotel {
  id: string;
  name: string;
  location: string;
  price: number;
  description: string;
  images: string[];
}

export interface HotelBooking {
  id: string;
  hotelId: string;
  hotelName: string;
  userName: string;
  userEmail: string;
  checkInDate: string;
  checkOutDate: string;
  totalPrice: number;
  status: 'Pending' | 'Confirmed' | 'Cancelled';
}
