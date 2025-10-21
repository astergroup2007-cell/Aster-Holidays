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
