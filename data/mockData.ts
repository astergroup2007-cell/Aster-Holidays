import type { TourPackage, Destination, Testimonial, Flight, Hotel } from '../types';

export const destinations: Destination[] = [
  { name: 'Sikkim', tagline: 'Valley of Flowers', image: 'https://images.unsplash.com/photo-1593537975999-51c335b78f4a?q=80&w=1974&auto=format&fit=crop' },
  { name: 'Darjeeling', tagline: 'The Queen of Hills', image: 'https://images.unsplash.com/photo-1544275223-c2472d2c1a85?q=80&w=1964&auto=format&fit=crop' },
  { name: 'Bhutan', tagline: 'Land of the Thunder Dragon', image: 'https://images.unsplash.com/photo-1568283661204-4411130e3a53?q=80&w=1974&auto=format&fit=crop' },
  { name: 'Nepal', tagline: 'Himalayan Paradise', image: 'https://images.unsplash.com/photo-1544439194-e0a5c5315a6b?q=80&w=1968&auto=format&fit=crop' },
  { name: 'Kalimpong', tagline: 'Orchids & Nurseries', image: 'https://images.unsplash.com/photo-1627895439818-a8b23f85e5ab?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Gangtok', tagline: 'The Capital City', image: 'https://images.unsplash.com/photo-1603565922096-2b4a539b207d?q=80&w=2070&auto=format&fit=crop' },
];

export let tourPackages: TourPackage[] = [
  {
    id: '1',
    name: 'Enchanting Sikkim Adventure',
    duration: '6 Days / 5 Nights',
    price: 25000,
    image: 'https://i.ibb.co/k2L3sS3/tour-1.jpg',
    destinationsCovered: ['Gangtok', 'Pelling', 'Lachung'],
    highlights: ['Tsomgo Lake', 'Yumthang Valley', 'Khangchendzonga views'],
    category: 'Adventure',
  },
  {
    id: '2',
    name: 'Romantic Darjeeling & Gangtok',
    duration: '7 Days / 6 Nights',
    price: 30000,
    image: 'https://i.ibb.co/mS2nLq3/tour-2.jpg',
    destinationsCovered: ['Darjeeling', 'Gangtok'],
    highlights: ['Tiger Hill Sunrise', 'Batasia Loop', 'MG Marg'],
    category: 'Honeymoon',
  },
  {
    id: '3',
    name: 'Majestic Bhutan Cultural Tour',
    duration: '5 Days / 4 Nights',
    price: 45000,
    image: 'https://i.ibb.co/yY1H2Gk/tour-3.jpg',
    destinationsCovered: ['Paro', 'Thimphu'],
    highlights: ["Tiger's Nest Monastery", 'Punakha Dzong', 'Buddha Dordenma'],
    category: 'Cultural',
  },
  {
    id: '4',
    name: 'Nepal Family Expedition',
    duration: '8 Days / 7 Nights',
    price: 35000,
    image: 'https://i.ibb.co/hL4X1G5/tour-4.jpg',
    destinationsCovered: ['Kathmandu', 'Pokhara', 'Chitwan'],
    highlights: ['Pashupatinath Temple', 'Phewa Lake boating', 'Jungle Safari'],
    category: 'Family',
  },
];

export const testimonials: Testimonial[] = [
    { name: 'Rahul & Priya', tour: 'Romantic Darjeeling', review: 'An absolutely magical trip! Aster Holidays planned everything perfectly. The sunrise from Tiger Hill was unforgettable. Highly recommended!', image: 'https://i.pravatar.cc/150?u=rahul' },
    { name: 'The Sharma Family', tour: 'Nepal Expedition', review: 'Our family had an amazing time in Nepal. The jungle safari in Chitwan was a highlight for the kids. Great service and very helpful guides.', image: 'https://i.pravatar.cc/150?u=sharma' },
    { name: 'Anjali Singh', tour: 'Sikkim Adventure', review: 'As a solo traveler, I felt completely safe and well-cared for. Yumthang Valley was breathtaking. Thank you, Aster Holidays, for a seamless experience.', image: 'https://i.pravatar.cc/150?u=anjali' },
];

export const flights: Flight[] = [
  {
    id: 'fl1',
    airline: 'IndiGo',
    airlineLogo: 'https://i.ibb.co/yWz3sV1/indigo-logo.png',
    origin: 'DEL',
    destination: 'BOM',
    departureTime: '08:30',
    arrivalTime: '10:45',
    duration: '2h 15m',
    stops: 0,
    price: 5400
  },
  {
    id: 'fl2',
    airline: 'Vistara',
    airlineLogo: 'https://i.ibb.co/D80R575/vistara-logo.png',
    origin: 'DEL',
    destination: 'BOM',
    departureTime: '09:15',
    arrivalTime: '11:30',
    duration: '2h 15m',
    stops: 0,
    price: 5850
  },
  {
    id: 'fl3',
    airline: 'Air India',
    airlineLogo: 'https://i.ibb.co/bJCwL68/airindia-logo.png',
    origin: 'DEL',
    destination: 'BOM',
    departureTime: '11:00',
    arrivalTime: '13:10',
    duration: '2h 10m',
    stops: 0,
    price: 5200
  },
  {
    id: 'fl4',
    airline: 'SpiceJet',
    airlineLogo: 'https://i.ibb.co/qN99tqR/spicejet-logo.png',
    origin: 'DEL',
    destination: 'BOM',
    departureTime: '07:00',
    arrivalTime: '10:30',
    duration: '3h 30m',
    stops: 1,
    price: 4800
  }
];

// FIX: Added mock hotel data to be used for seeding the Firebase database.
export const hotels: Hotel[] = [
  {
    id: 'hotel-1',
    name: 'Hotel Aster Gangtok',
    location: 'Tadong, Gangtok',
    price: 1500,
    description: 'Experience authentic Sikkimese hospitality at Hotel Aster Gangtok. Located in the prime Tadong area, our hotel offers a perfect blend of comfort and convenience, making it the ideal base for your Himalayan adventures.',
    images: [
      'https://i.ibb.co/cKSqXWVT/Whats-App-Image-2025-10-21-at-4-23-24-PM-1.jpg',
      'https://i.ibb.co/5hDC4XrC/Whats-App-Image-2025-10-21-at-4-23-24-PM.jpg',
      'https://i.ibb.co/jZ92Z3Th/Whats-App-Image-2025-10-21-at-4-23-25-PM.jpg',
    ]
  },
  {
    id: 'hotel-2',
    name: 'The Elgin, Darjeeling',
    location: 'Darjeeling, West Bengal',
    price: 8000,
    description: 'A luxury heritage hotel in Darjeeling, The Elgin is a celebration of the elegance and grace of the Colonial Era in the Queen of Hill Stations.',
    images: [
      'https://images.unsplash.com/photo-1544275223-c2472d2c1a85?q=80&w=1964&auto=format&fit=crop'
    ]
  }
];
