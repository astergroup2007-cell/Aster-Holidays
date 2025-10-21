import { hotels, flights } from '../data/mockData';
import type { Hotel, Flight } from '../types';

const simulateApiCall = <T>(data: T): Promise<T> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 500); // 500ms delay
  });
};

export const getHotels = (): Promise<Hotel[]> => {
  return simulateApiCall(hotels);
};

export const getHotelById = (id: string): Promise<Hotel | undefined> => {
  const hotel = hotels.find(h => h.id === id);
  return simulateApiCall(hotel);
};

export const getFlights = (): Promise<Flight[]> => {
  return simulateApiCall(flights);
};

export const getFlightById = (id: string): Promise<Flight | undefined> => {
    const flight = flights.find(f => f.id === id);
    return simulateApiCall(flight);
};
