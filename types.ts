// FIX: Export each interface and type to make this file a module.
// This resolves "File is not a module" errors in files that import from here.

export interface Destination {
  name: string;
  image: string;
  tagline: string;
}

export interface TourPackage {
  id: string;
  name: string;
  duration: string;
  price: number;
  image: string;
  destinationsCovered: string[];
  highlights: string[];
  category: 'Family' | 'Honeymoon' | 'Cultural' | 'Adventure';
}

export interface Testimonial {
  name: string;
  image: string;
  review: string;
  tour: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string; // Should be optional for security
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
    status: 'Confirmed' | 'Pending' | 'Cancelled';
}

export interface Article {
  id: string;
  title: string;
  author: string;
  content: string; // This could be Markdown or HTML
  imageUrl: string;
  createdAt: string; // ISO string date
  tags: string[];
  slug: string; // for URL-friendly paths
}
