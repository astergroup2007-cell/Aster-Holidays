import type { TourPackage, Flight, Destination, Testimonial } from '../types';

export const tourPackages: TourPackage[] = [
  {
    id: '1',
    name: 'Enchanting Sikkim Wonders',
    duration: '6 Days / 5 Nights',
    price: 25000,
    image: 'https://i.ibb.co/rRk0k5Bz/1.png',
    destinationsCovered: ['Gangtok', 'Pelling', 'Tsomgo Lake'],
    highlights: ['Tsomgo Lake Excursion', 'Pelling Skywalk', 'Gangtok Ropeway'],
    category: 'Family',
  },
  {
    id: '2',
    name: 'Darjeeling Queen of Hills',
    duration: '4 Days / 3 Nights',
    price: 15000,
    image: 'https://i.ibb.co/DPtMw9X6/2.png',
    destinationsCovered: ['Darjeeling', 'Tiger Hill', 'Batasia Loop'],
    highlights: ['Sunrise at Tiger Hill', 'Toy Train Ride', 'Tea Garden Visit'],
    category: 'Honeymoon',
  },
  {
    id: '3',
    name: 'Mystical Bhutan Gateway',
    duration: '7 Days / 6 Nights',
    price: 45000,
    image: 'https://i.ibb.co/twQ0d7N5/3.png',
    destinationsCovered: ['Paro', 'Thimphu', 'Punakha'],
    highlights: ["Hike to Tiger's Nest", 'Punakha Dzong', 'Buddha Dordenma'],
    category: 'Cultural',
  },
  {
    id: '4',
    name: 'Spiritual Nepal Discovery',
    duration: '8 Days / 7 Nights',
    price: 35000,
    image: 'https://picsum.photos/seed/nepal-tour/800/600',
    destinationsCovered: ['Kathmandu', 'Pokhara', 'Chitwan'],
    highlights: ['Pashupatinath Temple', 'Phewa Lake Boating', 'Jungle Safari in Chitwan'],
    category: 'Adventure',
  },
  {
    id: '5',
    name: 'North Sikkim Adventure',
    duration: '7 Days / 6 Nights',
    price: 32000,
    image: 'https://picsum.photos/seed/north-sikkim/800/600',
    destinationsCovered: ['Lachen', 'Lachung', 'Gurudongmar Lake'],
    highlights: ['Gurudongmar Lake', 'Yumthang Valley', 'Zero Point'],
    category: 'Adventure',
  },
  {
    id: '6',
    name: 'Darjeeling & Kalimpong Serenity',
    duration: '5 Days / 4 Nights',
    price: 18000,
    image: 'https://picsum.photos/seed/kalimpong-tour/800/600',
    destinationsCovered: ['Darjeeling', 'Kalimpong'],
    highlights: ['Deolo Hill', 'Pine View Nursery', 'Toy Train'],
    category: 'Family',
  }
];

export const flights: Flight[] = [
  {
    id: 'fl1',
    airline: 'IndiGo',
    airlineLogo: 'https://www.logo.wine/a/logo/IndiGo/IndiGo-Logo.wine.svg',
    origin: 'DEL',
    destination: 'BOM',
    departureTime: '08:30',
    arrivalTime: '10:45',
    duration: '2h 15m',
    price: 6000,
    stops: 0,
  },
  {
    id: 'fl2',
    airline: 'Vistara',
    airlineLogo: 'https://www.logo.wine/a/logo/Vistara/Vistara-Logo.wine.svg',
    origin: 'DEL',
    destination: 'BOM',
    departureTime: '10:00',
    arrivalTime: '12:10',
    duration: '2h 10m',
    price: 7200,
    stops: 0,
  },
];

export const destinations: Destination[] = [
  {
    name: 'Sikkim',
    tagline: 'Pristine Himalayan Paradise',
    image: 'https://i.ibb.co/nMcwzgbf/1.png',
  },
  {
    name: 'Darjeeling',
    tagline: 'The Queen of the Hills',
    image: 'https://i.ibb.co/pBNWM3Fq/2.png',
  },
  {
    name: 'Kalimpong',
    tagline: 'Serene Hills & Blooming Orchids',
    image: 'https://i.ibb.co/XfXNWnT4/3.png',
  },
  {
    name: 'Bhutan',
    tagline: 'Land of the Thunder Dragon',
    image: 'https://i.ibb.co/Ps16pF0j/4.png',
  },
   {
    name: 'Nepal',
    tagline: 'Birthplace of Lord Buddha',
    image: 'https://i.ibb.co/vCw7p9q9/5.png',
  },
   {
    name: 'North-East',
    tagline: 'India\'s Unexplored Paradise',
    image: 'https://i.ibb.co/d4qHRfzv/6.png',
  },
];

export const testimonials: Testimonial[] = [
    {
        name: 'Anjali & Rohan',
        location: 'Mumbai, India',
        tour: 'Darjeeling Honeymoon Package',
        review: 'Aster Holidays planned the perfect honeymoon for us! The views from Tiger Hill were breathtaking, and the tea garden tour was magical. Everything was seamless, from the hotel to the driver. Highly recommended!',
        image: 'https://picsum.photos/seed/couple1/100/100',
    },
    {
        name: 'The Sharma Family',
        location: 'Delhi, India',
        tour: 'Enchanting Sikkim Wonders',
        review: 'Our family trip to Sikkim was unforgettable, thanks to the Aster team. The kids loved the ropeway in Gangtok, and Tsomgo Lake was simply out of this world. Excellent service and very knowledgeable guides.',
        image: 'https://picsum.photos/seed/family1/100/100',
    },
    {
        name: 'David Smith',
        location: 'London, UK',
        tour: 'Mystical Bhutan Gateway',
        review: "An incredible journey into the Kingdom of Bhutan. Aster Holidays handled all the permits and logistics flawlessly. The hike to Tiger's Nest was a life-changing experience. Can't thank them enough for their professionalism.",
        image: 'https://picsum.photos/seed/traveler1/100/100',
    }
];