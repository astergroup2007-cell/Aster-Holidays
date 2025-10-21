import { tourPackages, flights, hotels as mockHotels } from '../data/mockData';
import type { TourPackage, Flight, Hotel } from '../types';
import { db, storage } from '../firebase';
import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc 
} from 'firebase/firestore';
import { 
  ref, 
  uploadBytes, 
  getDownloadURL, 
  deleteObject
} from 'firebase/storage';


// --- Tour Packages API (Local Mock) ---
const simulateApiCall = <T>(data: T): Promise<T> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};

export const getTourPackages = (): Promise<TourPackage[]> => {
  return simulateApiCall(tourPackages);
};

export const getTourPackageById = (id: string): Promise<TourPackage | undefined> => {
  const tour = tourPackages.find(p => p.id === id || `hotel-aster-${p.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}` === id);
  return simulateApiCall(tour);
};


// --- Flights API (Local Mock) ---
export const getFlights = (): Promise<Flight[]> => {
    return simulateApiCall(flights);
};

export const getFlightById = (id: string): Promise<Flight | undefined> => {
    const flight = flights.find(f => f.id === id);
    return simulateApiCall(flight);
};


// --- Hotel Management API (Firebase) ---
const hotelsCollectionRef = collection(db, 'hotels');

export const getHotels = async (): Promise<Hotel[]> => {
  const data = await getDocs(hotelsCollectionRef);
  const hotels = data.docs.map(doc => ({ ...doc.data(), id: doc.id } as Hotel));
  
  // If firestore is empty, populate with mock data once.
  if (hotels.length === 0 && mockHotels.length > 0) {
    console.log("Firestore 'hotels' collection is empty. Populating with initial mock data...");
    await Promise.all(mockHotels.map(hotel => addDoc(hotelsCollectionRef, { ...hotel, id: undefined })));
    // Refetch after populating
    const newData = await getDocs(hotelsCollectionRef);
    return newData.docs.map(doc => ({ ...doc.data(), id: doc.id } as Hotel));
  }
  
  return hotels;
};

export const addHotel = async (hotel: Omit<Hotel, 'id'>): Promise<string> => {
  const docRef = await addDoc(hotelsCollectionRef, hotel);
  return docRef.id;
};

export const updateHotel = async (hotel: Hotel): Promise<void> => {
  const hotelDoc = doc(db, 'hotels', hotel.id);
  const { id, ...hotelData } = hotel;
  await updateDoc(hotelDoc, hotelData);
};

export const uploadImage = async (file: File): Promise<string> => {
  const storageRef = ref(storage, `hotels/${Date.now()}-${file.name}`);
  await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
};

export const deleteHotel = async (hotel: Hotel): Promise<void> => {
  // Delete all associated images from Storage
  const imageDeletePromises = hotel.images.map(imageUrl => {
    try {
      const imageRef = ref(storage, imageUrl);
      return deleteObject(imageRef);
    } catch (error) {
      console.error(`Failed to create ref from URL: ${imageUrl}`, error);
      return Promise.resolve(); // Don't block deletion if one image fails
    }
  });
  await Promise.all(imageDeletePromises);

  // Delete the hotel document from Firestore
  const hotelDoc = doc(db, 'hotels', hotel.id);
  await deleteDoc(hotelDoc);
};