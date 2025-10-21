import { tourPackages, flights, hotels as mockHotels, hotelBookings as mockHotelBookings } from '../data/mockData';
import type { TourPackage, Flight, Hotel, HotelBooking } from '../types';

// Simulate API delay
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

// --- Tour Packages API ---

export const getTourPackages = async (): Promise<TourPackage[]> => {
  await delay(500);
  return tourPackages;
};

export const getTourPackageById = async (id: string): Promise<TourPackage | undefined> => {
  await delay(500);
  return tourPackages.find(tour => tour.id === id);
};

// --- Flights API ---

export const getFlights = async (): Promise<Flight[]> => {
    await delay(500);
    return flights;
}

export const getFlightById = async (id: string): Promise<Flight | undefined> => {
    await delay(500);
    return flights.find(flight => flight.id === id);
}

// --- Hotels API (Firebase Mock) ---
// This is a mock implementation. In a real app, these would interact with Firebase.

let hotels: Hotel[] = [...mockHotels];
let hotelBookings: HotelBooking[] = [...mockHotelBookings];

export const getHotels = async (): Promise<Hotel[]> => {
    console.warn("Using mock API for getHotels. Data is not persisted.");
    await delay(1000);
    return hotels;
};

export const addHotel = async (hotel: Omit<Hotel, 'id'>): Promise<Hotel> => {
    console.warn("Using mock API for addHotel. Data is not persisted.");
    await delay(1000);
    const newHotel: Hotel = { ...hotel, id: `hotel-${Date.now()}` };
    hotels.push(newHotel);
    return newHotel;
};

export const updateHotel = async (updatedHotel: Hotel): Promise<Hotel> => {
    console.warn("Using mock API for updateHotel. Data is not persisted.");
    await delay(1000);
    hotels = hotels.map(hotel => hotel.id === updatedHotel.id ? updatedHotel : hotel);
    return updatedHotel;
};

export const deleteHotel = async (hotelToDelete: Hotel): Promise<void> => {
    console.warn("Using mock API for deleteHotel. Data is not persisted.");
    await delay(1000);
    hotels = hotels.filter(hotel => hotel.id !== hotelToDelete.id);
};

export const uploadImage = async (file: File): Promise<string> => {
    console.warn("Using mock API for uploadImage. A placeholder URL is returned.");
    await delay(1500);
    // In a real Firebase app, this would upload the file and return the download URL.
    // Here, we'll return a placeholder or the local blob URL for display.
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            resolve(reader.result as string);
        };
        reader.readAsDataURL(file);
    });
};


// --- Hotel Bookings API (Mock) ---

export const getHotelBookings = async (): Promise<HotelBooking[]> => {
    console.warn("Using mock API for getHotelBookings. Data is not persisted.");
    await delay(1000);
    return hotelBookings;
};

export const updateBookingStatus = async (bookingId: string, status: HotelBooking['status']): Promise<HotelBooking> => {
    console.warn("Using mock API for updateBookingStatus. Data is not persisted.");
    await delay(500);
    const bookingIndex = hotelBookings.findIndex(b => b.id === bookingId);
    if (bookingIndex > -1) {
        hotelBookings[bookingIndex].status = status;
        return hotelBookings[bookingIndex];
    }
    throw new Error("Booking not found");
};
