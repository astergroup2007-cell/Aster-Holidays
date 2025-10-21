import React, { useState, useEffect } from 'react';
import type { HotelBooking } from '../../types';
import { getHotelBookings, updateBookingStatus } from '../../services/api';

const ManageHotelBookings: React.FC = () => {
    const [bookings, setBookings] = useState<HotelBooking[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchBookings = async () => {
        setLoading(true);
        try {
            const data = await getHotelBookings();
            setBookings(data);
        } catch (error) {
            console.error("Failed to fetch bookings:", error);
            alert("Could not fetch bookings.");
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchBookings();
    }, []);

    const handleStatusChange = async (bookingId: string, newStatus: HotelBooking['status']) => {
        try {
            await updateBookingStatus(bookingId, newStatus);
            // Refresh the list to show the updated status
            setBookings(prevBookings =>
                prevBookings.map(booking =>
                    booking.id === bookingId ? { ...booking, status: newStatus } : booking
                )
            );
            alert("Booking status updated.");
        } catch (error) {
            console.error("Failed to update status:", error);
            alert("Could not update booking status.");
        }
    };

    if (loading) return <div className="text-center p-8">Loading hotel bookings...</div>;

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Manage Hotel Bookings</h1>
            <div className="bg-white shadow-md rounded-lg overflow-x-auto">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Hotel</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Guest</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Dates</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Total Price</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map(booking => (
                            <tr key={booking.id}>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{booking.hotelName}</td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p>{booking.userName}</p>
                                    <p className="text-gray-500">{booking.userEmail}</p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{booking.checkInDate} to {booking.checkOutDate}</td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">₹{booking.totalPrice.toLocaleString('en-IN')}</td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                        booking.status === 'Confirmed' ? 'bg-green-200 text-green-800' :
                                        booking.status === 'Pending' ? 'bg-yellow-200 text-yellow-800' :
                                        'bg-red-200 text-red-800'
                                    }`}>
                                        {booking.status}
                                    </span>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <select 
                                        value={booking.status} 
                                        onChange={(e) => handleStatusChange(booking.id, e.target.value as HotelBooking['status'])}
                                        className="border border-gray-300 rounded-md p-1 focus:outline-none"
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="Confirmed">Confirmed</option>
                                        <option value="Cancelled">Cancelled</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageHotelBookings;