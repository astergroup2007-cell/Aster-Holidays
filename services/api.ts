import { tourPackages, flights } from '../data/mockData';
import type { TourPackage, Flight } from '../types';

// --- LocalStorage Data Management ---
const TOURS_KEY = 'tourPackages';

// Initialize data in localStorage if it doesn't exist
const initializeData = () => {
  if (!localStorage.getItem(TOURS_KEY)) {
    localStorage.setItem(TOURS_KEY, JSON.stringify(tourPackages));
  }
};

initializeData(); // Run on app load

const getToursFromStorage = (): TourPackage[] => {
  try {
    const data = localStorage.getItem(TOURS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Failed to parse tours from localStorage", error);
    return [];
  }
};

const saveToursToStorage = (tours: TourPackage[]) => {
  localStorage.setItem(TOURS_KEY, JSON.stringify(tours));
};
// --- End LocalStorage Data Management ---

const simulateApiCall = <T>(data: T): Promise<T> => {
  return new Promise(resolve => {
    // Shorter delay for admin actions
    setTimeout(() => {
      resolve(data);
    }, 100); 
  });
};

export const getTourPackages = (): Promise<TourPackage[]> => {
  const tours = getToursFromStorage();
  return simulateApiCall(tours);
};

export const getTourPackageById = (id: string): Promise<TourPackage | undefined> => {
  const tours = getToursFromStorage();
  const tour = tours.find(h => h.id === id);
  return simulateApiCall(tour);
};

// --- Admin API Functions ---
export const addTourPackage = async (tour: Omit<TourPackage, 'id'>): Promise<TourPackage> => {
    const tours = await getTourPackages();
    const newTour = { ...tour, id: new Date().getTime().toString() };
    const updatedTours = [...tours, newTour];
    saveToursToStorage(updatedTours);
    return simulateApiCall(newTour);
};

export const updateTourPackage = async (updatedTour: TourPackage): Promise<TourPackage> => {
    let tours = await getTourPackages();
    tours = tours.map(tour => tour.id === updatedTour.id ? updatedTour : tour);
    saveToursToStorage(tours);
    return simulateApiCall(updatedTour);
};

export const deleteTourPackage = async (id: string): Promise<void> => {
    let tours = await getTourPackages();
    tours = tours.filter(tour => tour.id !== id);
    saveToursToStorage(tours);
    return simulateApiCall(undefined);
};
// --- End Admin API Functions ---

// Flight data remains static for now
export const getFlights = (): Promise<Flight[]> => {
  return new Promise(resolve => setTimeout(() => resolve(flights), 500));
};

export const getFlightById = (id: string): Promise<Flight | undefined> => {
    const flight = flights.find(f => f.id === id);
    return new Promise(resolve => setTimeout(() => resolve(flight), 500));
};