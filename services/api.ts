import { hotels, flights } from '../data/mockData';
import type { Hotel, Flight } from '../types';

const SIMULATED_DELAY = 500; // in milliseconds

export const getHotels = (): Promise<Hotel[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(hotels);
    }, SIMULATED_DELAY);
  });
};

export const getHotelById = (id: string): Promise<Hotel | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const hotel = hotels.find((h) => h.id === id) || null;
      resolve(hotel);
    }, SIMULATED_DELAY);
  });
};

export const getFlights = (): Promise<Flight[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(flights);
    }, SIMULATED_DELAY);
  });
};