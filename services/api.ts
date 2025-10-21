import { tourPackages, flights } from '../data/mockData';
import type { TourPackage, Flight } from '../types';

const simulateApiCall = <T>(data: T): Promise<T> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 500); // Simulate 500ms network delay
  });
};

export const getTourPackages = (): Promise<TourPackage[]> => {
  return simulateApiCall(tourPackages);
};

export const getTourPackageById = (id: string): Promise<TourPackage | undefined> => {
  const tour = tourPackages.find(p => p.id === id || `hotel-aster-${p.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}` === id);
  return simulateApiCall(tour);
};

export const getFlights = (): Promise<Flight[]> => {
    return simulateApiCall(flights);
};

export const getFlightById = (id: string): Promise<Flight | undefined> => {
    const flight = flights.find(f => f.id === id);
    return simulateApiCall(flight);
};
