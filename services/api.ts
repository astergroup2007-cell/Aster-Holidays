import { db, storage } from '../firebase';
import { 
  collection, 
  getDocs, 
  getDoc, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc,
  query,
  where
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

import type { TourPackage, Hotel, HotelBooking, Article, Flight } from '../types';
import { tourPackages, hotels, hotelBookings, flights } from '../data/mockData';

// --- Local Storage Fallback for simpler setup ---
// This part can be used if Firebase isn't fully configured
const useLocalStorage = true;

const getFromStorage = <T>(key: string, fallback: T[]): T[] => {
  if (!useLocalStorage) return [];
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  } else {
    localStorage.setItem(key, JSON.stringify(fallback));
    return fallback;
  }
};

const saveToStorage = <T>(key: string, data: T[]) => {
  if (useLocalStorage) {
    localStorage.setItem(key, JSON.stringify(data));
  }
};


// --- Image Upload Service ---
export const uploadImage = async (file: File): Promise<string> => {
  const storageRef = ref(storage, `images/${Date.now()}_${file.name}`);
  const snapshot = await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(snapshot.ref);
  return downloadURL;
};

// --- Tour Package API ---
export const getTourPackages = async (): Promise<TourPackage[]> => {
    if (useLocalStorage) return getFromStorage('tourPackages', tourPackages);
    // Firebase implementation
    const toursCollection = collection(db, "tourPackages");
    const tourSnapshot = await getDocs(toursCollection);
    return tourSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as TourPackage));
};

export const getTourPackageById = async (id: string): Promise<TourPackage | null> => {
    if (useLocalStorage) {
      const tours = getFromStorage('tourPackages', tourPackages);
      return tours.find(tour => tour.id === id) || null;
    }
    // Firebase implementation
    const tourDoc = await getDoc(doc(db, "tourPackages", id));
    return tourDoc.exists() ? { id: tourDoc.id, ...tourDoc.data() } as TourPackage : null;
};

export const addTourPackage = async (tour: Omit<TourPackage, 'id'>): Promise<TourPackage> => {
    if (useLocalStorage) {
      const tours = getFromStorage('tourPackages', tourPackages);
      const newTour = { ...tour, id: `tour_${Date.now()}` };
      saveToStorage('tourPackages', [...tours, newTour]);
      return newTour;
    }
    // Firebase implementation
    const docRef = await addDoc(collection(db, "tourPackages"), tour);
    return { id: docRef.id, ...tour };
};

export const updateTourPackage = async (tour: TourPackage): Promise<void> => {
    if (useLocalStorage) {
      const tours = getFromStorage('tourPackages', tourPackages);
      const updatedTours = tours.map(t => t.id === tour.id ? tour : t);
      saveToStorage('tourPackages', updatedTours);
      return;
    }
    // Firebase implementation
    const tourRef = doc(db, "tourPackages", tour.id);
    await updateDoc(tourRef, { ...tour });
};

export const deleteTourPackage = async (id: string): Promise<void> => {
    if (useLocalStorage) {
      const tours = getFromStorage('tourPackages', tourPackages);
      saveToStorage('tourPackages', tours.filter(t => t.id !== id));
      return;
    }
    // Firebase implementation
    await deleteDoc(doc(db, "tourPackages", id));
};

// --- Flights API ---
// FIX: Add missing getFlights function to resolve API errors.
export const getFlights = async (): Promise<Flight[]> => {
    if (useLocalStorage) return getFromStorage('flights', flights);
    // Firebase implementation would go here
    return Promise.resolve([]); // Fallback for firebase
};

// FIX: Add missing getFlightById function to resolve API errors.
export const getFlightById = async (id: string): Promise<Flight | null> => {
    if (useLocalStorage) {
        const allFlights = getFromStorage('flights', flights);
        return allFlights.find(flight => flight.id === id) || null;
    }
    // Firebase implementation would go here
    return Promise.resolve(null); // Fallback for firebase
};


// --- Hotels API ---
export const getHotels = async (): Promise<Hotel[]> => {
    if (useLocalStorage) return getFromStorage('hotels', hotels);
    // Firebase
    const hotelsCollection = collection(db, "hotels");
    const snapshot = await getDocs(hotelsCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Hotel));
};

export const addHotel = async (hotel: Omit<Hotel, 'id'>): Promise<Hotel> => {
    if (useLocalStorage) {
        const currentHotels = getFromStorage('hotels', hotels);
        const newHotel = { ...hotel, id: `hotel_${Date.now()}` };
        saveToStorage('hotels', [...currentHotels, newHotel]);
        return newHotel;
    }
    // Firebase
    const docRef = await addDoc(collection(db, "hotels"), hotel);
    return { id: docRef.id, ...hotel };
};

export const updateHotel = async (hotel: Hotel): Promise<void> => {
    if (useLocalStorage) {
        const currentHotels = getFromStorage('hotels', hotels);
        const updatedHotels = currentHotels.map(h => h.id === hotel.id ? hotel : h);
        saveToStorage('hotels', updatedHotels);
        return;
    }
    // Firebase
    const hotelRef = doc(db, "hotels", hotel.id);
    const { id, ...data } = hotel;
    await updateDoc(hotelRef, data);
};

export const deleteHotel = async (hotelToDelete: Hotel): Promise<void> => {
    // Delete images from storage first
    if (hotelToDelete.images) {
        for (const imageUrl of hotelToDelete.images) {
            try {
                const imageRef = ref(storage, imageUrl);
                await deleteObject(imageRef);
            } catch (error) {
                console.error(`Failed to delete image ${imageUrl}:`, error);
                // Don't block deletion of document if one image fails
            }
        }
    }

    if (useLocalStorage) {
        const currentHotels = getFromStorage('hotels', hotels);
        saveToStorage('hotels', currentHotels.filter(h => h.id !== hotelToDelete.id));
        return;
    }
    // Firebase
    await deleteDoc(doc(db, "hotels", hotelToDelete.id));
};


// --- Hotel Bookings API ---
export const getHotelBookings = async (): Promise<HotelBooking[]> => {
    if (useLocalStorage) return getFromStorage('hotelBookings', hotelBookings);
    // Firebase
    const bookingsCollection = collection(db, "hotelBookings");
    const snapshot = await getDocs(bookingsCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as HotelBooking));
};

export const updateBookingStatus = async (bookingId: string, status: HotelBooking['status']): Promise<void> => {
    if (useLocalStorage) {
        const bookings = getFromStorage('hotelBookings', hotelBookings);
        const updatedBookings = bookings.map(b => b.id === bookingId ? { ...b, status } : b);
        saveToStorage('hotelBookings', updatedBookings);
        return;
    }
    // Firebase
    const bookingRef = doc(db, "hotelBookings", bookingId);
    await updateDoc(bookingRef, { status });
};


// --- Articles API ---
export const getArticles = async (): Promise<Article[]> => {
    const articlesCollection = collection(db, "articles");
    const snapshot = await getDocs(articlesCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Article));
};

export const getArticleById = async (id: string): Promise<Article | null> => {
    const articleDoc = await getDoc(doc(db, "articles", id));
    return articleDoc.exists() ? { id: articleDoc.id, ...articleDoc.data() } as Article : null;
};

export const getArticleBySlug = async (slug: string): Promise<Article | null> => {
    const q = query(collection(db, "articles"), where("slug", "==", slug));
    const snapshot = await getDocs(q);
    if (snapshot.empty) {
        return null;
    }
    const docData = snapshot.docs[0];
    return { id: docData.id, ...docData.data() } as Article;
};


export const saveArticle = async (article: Omit<Article, 'id'> & { id?: string }): Promise<string> => {
    if (article.id) {
        // Update existing article
        const articleRef = doc(db, "articles", article.id);
        const { id, ...data } = article;
        await updateDoc(articleRef, data);
        return id;
    } else {
        // Create new article
        const docRef = await addDoc(collection(db, "articles"), article);
        return docRef.id;
    }
};


export const deleteArticle = async (articleId: string): Promise<void> => {
    await deleteDoc(doc(db, "articles", articleId));
};
