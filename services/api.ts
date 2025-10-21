// services/api.ts

import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '../firebase';
import type { TourPackage, Flight, Hotel, HotelBooking } from '../types';
import { tourPackages, flights, hotels, hotelBookings } from '../data/mockData'; // Using mock data as a fallback

// --- Tour Package API ---

const tourCollection = collection(db, 'tours');

export const getTourPackages = async (): Promise<TourPackage[]> => {
  try {
    const snapshot = await getDocs(tourCollection);
    if (snapshot.empty) {
        console.warn("No tour packages found in Firestore, returning mock data.");
        return tourPackages;
    }
    return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as TourPackage));
  } catch (error) {
    console.error("Error fetching tours from Firestore, returning mock data: ", error);
    return tourPackages;
  }
};

export const getTourPackageById = async (id: string): Promise<TourPackage | null> => {
  try {
    const docRef = doc(db, 'tours', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { ...docSnap.data(), id: docSnap.id } as TourPackage;
    }
    console.warn(`Tour with id ${id} not found in Firestore, checking mock data.`);
  } catch (error) {
     console.error(`Error fetching tour ${id} from Firestore, checking mock data: `, error);
  }
  return tourPackages.find(p => p.id === id) || null;
};

export const addTourPackage = async (tourData: Omit<TourPackage, 'id'>): Promise<void> => {
  await addDoc(tourCollection, tourData);
};

export const updateTourPackage = async (tourData: TourPackage): Promise<void> => {
  const { id, ...data } = tourData;
  const docRef = doc(db, 'tours', id);
  await updateDoc(docRef, data);
};

export const deleteTourPackage = async (tourId: string): Promise<void> => {
  const docRef = doc(db, 'tours', tourId);
  await deleteDoc(docRef);
};


// --- Flight API (using mock data) ---

export const getFlights = async (): Promise<Flight[]> => {
  return Promise.resolve(flights);
};

export const getFlightById = async (id: string): Promise<Flight | null> => {
  return Promise.resolve(flights.find(f => f.id === id) || null);
};

// --- Hotel API ---

const hotelCollection = collection(db, 'hotels');

export const getHotels = async (): Promise<Hotel[]> => {
  try {
    const snapshot = await getDocs(hotelCollection);
    if (snapshot.empty) {
        console.warn("No hotels found in Firestore, returning mock data.");
        return hotels;
    }
    return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as Hotel));
  } catch(error) {
    console.error("Error fetching hotels from Firestore, returning mock data: ", error);
    return hotels;
  }
};

export const addHotel = async (hotelData: Omit<Hotel, 'id'>): Promise<void> => {
    await addDoc(hotelCollection, hotelData);
};

export const updateHotel = async (hotelData: Hotel): Promise<void> => {
    const { id, ...data } = hotelData;
    const docRef = doc(db, 'hotels', id);
    await updateDoc(docRef, data);
};

export const deleteHotel = async (hotel: Hotel): Promise<void> => {
    // Delete images from storage first
    if (hotel.images) {
      const deletePromises = hotel.images.map(imageUrl => {
        try {
          const imageRef = ref(storage, imageUrl);
          return deleteObject(imageRef);
        } catch (error) {
          console.error(`Failed to create ref for image ${imageUrl}: `, error);
          return Promise.resolve();
        }
      });
      await Promise.all(deletePromises);
    }
    
    // Delete hotel document from firestore
    const docRef = doc(db, 'hotels', hotel.id);
    await deleteDoc(docRef);
};

// --- Hotel Booking API ---
const bookingCollection = collection(db, 'hotelBookings');

export const getHotelBookings = async (): Promise<HotelBooking[]> => {
    try {
        const snapshot = await getDocs(bookingCollection);
        if (snapshot.empty) {
            console.warn("No bookings found in Firestore, returning mock data.");
            return hotelBookings;
        }
        return snapshot.docs.map(doc => ({...doc.data(), id: doc.id} as HotelBooking));
    } catch (error) {
        console.error("Error fetching bookings from Firestore, returning mock data: ", error);
        return hotelBookings;
    }
};

export const updateBookingStatus = async (bookingId: string, status: HotelBooking['status']): Promise<void> => {
    const docRef = doc(db, 'hotelBookings', bookingId);
    await updateDoc(docRef, { status });
};


// --- Firebase Storage for Images ---
export const uploadImage = async (file: File): Promise<string> => {
  const storageRef = ref(storage, `images/${Date.now()}_${file.name}`);
  await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
};
