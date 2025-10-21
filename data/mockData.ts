import type { Destination, TourPackage, Testimonial, Flight, Hotel, HotelBooking } from '../types';

export const destinations: Destination[] = [
  { name: 'Sikkim', image: 'https://images.unsplash.com/photo-1591148479901-52514b8a2e57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', tagline: 'Valley of Flowers' },
  { name: 'Darjeeling', image: 'https://images.unsplash.com/photo-1544275218-1372b680d28d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', tagline: 'The Queen of Hills' },
  { name: 'Bhutan', image: 'https://images.unsplash.com/photo-1512413317822-e42a1b32de9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', tagline: 'Land of the Thunder Dragon' },
  { name: 'Nepal', image: 'https://images.unsplash.com/photo-1544439133-f3942891da32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', tagline: 'Roof of the World' },
  { name: 'Kalimpong', image: 'https://images.unsplash.com/photo-1623351934085-8d762118320b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', tagline: 'Orchids and Nurseries' },
  { name: 'Goa', image: 'https://images.unsplash.com/photo-1560179407-dc35c3336183?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', tagline: 'Sun, Sand, and Sea' },
];

export const tourPackages: TourPackage[] = [
  {
    id: 'sikkim-delight',
    name: 'Enchanting Sikkim Delight',
    duration: '5 Nights / 6 Days',
    price: 18500,
    image: 'https://i.ibb.co/cKSqXWVT/Whats-App-Image-2025-10-21-at-4-23-24-PM-1.jpg',
    destinationsCovered: ['Gangtok', 'Pelling', 'Lachung'],
    highlights: ['Tsomgo Lake', 'Yumthang Valley', 'Khangchendzonga Falls'],
    category: 'Family'
  },
  {
    id: 'darjeeling-romance',
    name: 'Romantic Darjeeling Getaway',
    duration: '3 Nights / 4 Days',
    price: 12000,
    image: 'https://i.ibb.co/5hDC4XrC/Whats-App-Image-2025-10-21-at-4-23-24-PM.jpg',
    destinationsCovered: ['Darjeeling', 'Mirik'],
    highlights: ['Tiger Hill Sunrise', 'Batasia Loop', 'Tea Garden Visit'],
    category: 'Honeymoon'
  },
  {
    id: 'bhutan-discovery',
    name: 'Mystical Bhutan Discovery',
    duration: '6 Nights / 7 Days',
    price: 35000,
    image: 'https://i.ibb.co/jZ92Z3Th/Whats-App-Image-2025-10-21-at-4-23-25-PM.jpg',
    destinationsCovered: ['Paro', 'Thimphu', 'Punakha'],
    highlights: ["Tiger's Nest Monastery", 'Punakha Dzong', 'Buddha Dordenma'],
    category: 'Cultural'
  },
  {
    id: 'nepal-adventure',
    name: 'Nepal Himalayan Adventure',
    duration: '7 Nights / 8 Days',
    price: 45000,
    image: 'https://i.ibb.co/sDZRqR6/Whats-App-Image-2025-10-21-at-4-23-25-PM-1.jpg',
    destinationsCovered: ['Kathmandu', 'Pokhara', 'Chitwan'],
    highlights: ['Pashupatinath Temple', 'Jungle Safari', 'Phewa Lake Boating'],
    category: 'Adventure'
  },
];

export const testimonials: Testimonial[] = [
    {
        name: 'Rohan Sharma',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        review: 'An amazing trip to Sikkim organized by Aster Holidays. Everything was seamless, from the hotels to the driver. Highly recommended for a hassle-free vacation!',
        tour: 'Enchanting Sikkim Delight'
    },
    {
        name: 'Priya Mehta',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        review: 'Our honeymoon in Darjeeling was a dream come true, thanks to the meticulous planning by the team. The hotels were cozy and the itinerary was perfect.',
        tour: 'Romantic Darjeeling Getaway'
    },
    {
        name: 'Anil Kumar',
        image: 'https://randomuser.me/api/portraits/men/36.jpg',
        review: 'Bhutan was magical. Aster Holidays made the entire process, including permits, very easy. Our guide was knowledgeable and friendly. Will travel with them again!',
        tour: 'Mystical Bhutan Discovery'
    }
];

export const flights: Flight[] = [
    {
        id: 'fl-1',
        airline: 'IndiGo',
        airlineLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Indigo_logo.svg/200px-Indigo_logo.svg.png',
        origin: 'DEL',
        destination: 'BOM',
        departureTime: '08:30',
        arrivalTime: '10:45',
        duration: '2h 15m',
        price: 4500,
        stops: 0
    },
    {
        id: 'fl-2',
        airline: 'Vistara',
        airlineLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Vistara_logo.svg/200px-Vistara_logo.svg.png',
        origin: 'DEL',
        destination: 'BOM',
        departureTime: '10:00',
        arrivalTime: '12:10',
        duration: '2h 10m',
        price: 5200,
        stops: 0
    },
    {
        id: 'fl-3',
        airline: 'Air India',
        airlineLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Air_India_logo.svg/200px-Air_India_logo.svg.png',
        origin: 'DEL',
        destination: 'BOM',
        departureTime: '14:00',
        arrivalTime: '17:50',
        duration: '3h 50m',
        price: 4800,
        stops: 1
    }
];

export const hotels: Hotel[] = [
    {
        id: 'hotel-1',
        name: 'The Elgin, Darjeeling',
        location: 'Darjeeling, West Bengal',
        price: 8500,
        description: 'A luxurious heritage hotel with stunning views of the Himalayas.',
        images: ['https://i.ibb.co/cKSqXWVT/Whats-App-Image-2025-10-21-at-4-23-24-PM-1.jpg', 'https://i.ibb.co/5hDC4XrC/Whats-App-Image-2025-10-21-at-4-23-24-PM.jpg']
    },
    {
        id: 'hotel-2',
        name: 'Mayfair Spa Resort & Casino',
        location: 'Gangtok, Sikkim',
        price: 12000,
        description: 'Award-winning 5-star deluxe hotel known for its spa and casino.',
        images: ['https://i.ibb.co/jZ92Z3Th/Whats-App-Image-2025-10-21-at-4-23-25-PM.jpg', 'https://i.ibb.co/sDZRqR6/Whats-App-Image-2025-10-21-at-4-23-25-PM-1.jpg']
    },
];

export const hotelBookings: HotelBooking[] = [
    {
        id: 'booking-1',
        hotelId: 'hotel-1',
        hotelName: 'The Elgin, Darjeeling',
        userName: 'John Doe',
        userEmail: 'john.doe@example.com',
        checkInDate: '2024-11-15',
        checkOutDate: '2024-11-18',
        totalPrice: 25500,
        status: 'Confirmed'
    },
    {
        id: 'booking-2',
        hotelId: 'hotel-2',
        hotelName: 'Mayfair Spa Resort & Casino',
        userName: 'Jane Smith',
        userEmail: 'jane.smith@example.com',
        checkInDate: '2024-12-22',
        checkOutDate: '2024-12-25',
        totalPrice: 36000,
        status: 'Pending'
    }
];
