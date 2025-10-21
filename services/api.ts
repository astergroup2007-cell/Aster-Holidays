
import { hotels } from '../data/mockData';
import type { Hotel } from '../types';

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
