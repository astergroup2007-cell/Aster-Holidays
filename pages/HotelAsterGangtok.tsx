import React from 'react';
import { Link } from 'react-router-dom';

// --- INLINE DATA & COMPONENTS (DUE TO FILE CONSTRAINTS) ---

const roomData = [
    {
        name: "Deluxe Single Room",
        description: "Perfect for solo travelers exploring Sikkim, our Deluxe Single room offers a cozy, well-appointed space with modern amenities. It's the ideal private retreat after a day of adventure in Gangtok.",
        bestFor: ["Solo Travelers", "Business Visitors", "Budget-Conscious Guests"],
        pricing: {
            season: { ep: 1200, cp: 1500, map: 1800 },
            offSeason: { ep: 1000, cp: 1300, map: 1600 }
        },
        image: "https://i.ibb.co/217YVtMH/Whats-App-Image-2025-10-21-at-4-23-23-PM-1.jpg"
    },
    {
        name: "Deluxe Double Room",
        description: "Ideal for couples or friends, the Deluxe Double room provides a comfortable and spacious setting. Enjoy modern interiors with local Sikkimese touches, making it a perfect base for your Gangtok explorations.",
        bestFor: ["Couples", "Honeymooners", "Friends Traveling Together"],
        pricing: {
            season: { ep: 1500, cp: 1800, map: 2200 },
            offSeason: { ep: 1300, cp: 1500, map: 2000 }
        },
        image: "https://i.ibb.co/cKSqXWVT/Whats-App-Image-2025-10-21-at-4-23-24-PM-1.jpg"
    },
    {
        name: "Super Deluxe Room",
        description: "For those seeking extra comfort, our Super Deluxe rooms offer enhanced space, upgraded interiors, and superior views. It's a premium choice for a more relaxing and memorable stay in the Himalayas.",
        bestFor: ["Discerning Travelers", "Special Occasions", "Extended Stays"],
        pricing: {
            season: { ep: 1800, cp: 2100, map: 2500 },
            offSeason: { ep: 1500, cp: 1800, map: 2200 }
        },
        image: "https://i.ibb.co/5hDC4XrC/Whats-App-Image-2025-10-21-at-4-23-24-PM.jpg"
    },
     {
        name: "Super Deluxe Triple Room",
        description: "Perfectly designed for three adults, this room offers ample space without compromising on comfort. It's a cost-effective solution for small families or groups of friends wanting to stay together.",
        bestFor: ["Small Families", "Groups of Three", "Cost-Sharing Friends"],
        pricing: {
            season: { ep: 2100, cp: 2500, map: 3000 },
            offSeason: { ep: 1800, cp: 2200, map: 2700 }
        },
        image: "https://i.ibb.co/jZ92Z3Th/Whats-App-Image-2025-10-21-at-4-23-25-PM.jpg"
    },
    {
        name: "Family Room (5 Pax)",
        description: "Our largest accommodation, the Family Room, is designed to comfortably house up to five guests. With multiple beds and a spacious layout, it ensures your family can stay together and create lasting memories.",
        bestFor: ["Large Families", "Groups of 5", "Multi-Generational Trips"],
        pricing: {
            season: { ep: 3000, cp: 4000, map: 5000 },
            offSeason: { ep: 2700, cp: 3700, map: 4500 }
        },
        image: "https://i.ibb.co/sDZRqR6/Whats-App-Image-2025-10-21-at-4-23-25-PM-1.jpg"
    }
];

const facilities = [
    { name: "In-House Restaurant", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5m18-6H3v6a2 2 0 002 2h14a2 2 0 002-2V9zM12 9V4m0 0a2 2 0 100 4 2 2 0 000-4z" /></svg> },
    { name: "Aster Holidays Travel Desk", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
    { name: "Free High-Speed WiFi", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.393 9.393a15 15 0 0121.214 0" /></svg> },
    { name: "Secure On-Site Parking", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-16H8a4 4 0 00-4 4v8a4 4 0 004 4h12a3 3 0 003-3V7a3 3 0 00-3-3z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3m-3 4h4" /></svg> },
    { name: "24/7 Hot Water", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4 2 2 0 000-4zm0 6v2m0-2a2 2 0 100 4 2 2 0 000-4zm0 6v2m0-2a2 2 0 100 4 2 2 0 000-4z" /></svg> },
    { name: "Daily Housekeeping", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg> }
];

const galleryImages = [
    { src: "https://i.ibb.co/mrxnp4Df/Whats-App-Image-2025-10-21-at-4-23-23-PM-2.jpg", alt: "Hotel Aster Gangtok exterior view" },
    { src: "https://i.ibb.co/cKSqXWVT/Whats-App-Image-2025-10-21-at-4-23-24-PM-1.jpg", alt: "Spacious and clean deluxe double room" },
    { src: "https://i.ibb.co/5hDC4XrC/Whats-App-Image-2025-10-21-at-4-23-24-PM.jpg", alt: "Comfortable bedding in Super Deluxe room" },
    { src: "https://i.ibb.co/sDZRqR6/Whats-App-Image-2025-10-21-at-4-23-25-PM-1.jpg", alt: "Family room setup at Hotel Aster" },
    { src: "https://i.ibb.co/jZ92Z3Th/Whats-App-Image-2025-10-21-at-4-23-25-PM.jpg", alt: "Triple bed arrangement in Super Deluxe Triple Room" },
    { src: "https://i.ibb.co/HWyzWZd/Whats-App-Image-2025-10-21-at-4-23-26-PM-1.jpg", alt: "Well-maintained hotel corridor" },
    { src: "https://i.ibb.co/99K0SK45/Whats-App-Image-2025-10-21-at-4-23-26-PM.jpg", alt: "Modern and clean attached bathroom" },
    { src: "https://i.ibb.co/k21W34sz/Whats-App-Image-2025-10-21-at-4-23-27-PM-2.jpg", alt: "View from a hotel room window" },
    { src: "https://i.ibb.co/hF1yRtbC/Whats-App-Image-2025-10-21-at-4-23-27-PM-1.jpg", alt: "Bright and airy room interior" },
    { src: "https://i.ibb.co/bMKN1W8J/Whats-App-Image-2025-10-21-at-4-23-27-PM.jpg", alt: "Lobby and reception area" },
    { src: "https://i.ibb.co/FLJbWJdv/Whats-App-Image-2025-10-21-at-4-23-28-PM-1.jpg", alt: "Another view of a deluxe room" },
    { src: "https://i.ibb.co/v6X9hNjL/Whats-App-Image-2025-10-21-at-4-23-28-PM.jpg", alt: "Hotel Aster Gangtok building" }
];

const HotelAsterGangtok: React.FC = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[450px] bg-cover bg-center text-white" style={{ backgroundImage: "url('https://i.ibb.co/mrxnp4Df/Whats-App-Image-2025-10-21-at-4-23-23-PM-2.jpg')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading">Hotel Aster Gangtok</h1>
          <p className="text-lg md:text-xl mt-4 max-w-2xl">Your comfortable and welcoming home in the heart of the Himalayas, perfectly located in Tadong.</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold font-heading text-secondary mb-4">Your Home in the Himalayas</h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to Hotel Aster, your perfect base for exploring the wonders of Gangtok and Sikkim. Nestled in the prime Tadong area, our hotel offers a serene escape with easy access to the city's main attractions. As part of the trusted Aster Holidays family, we blend modern comfort with warm Sikkimese hospitality, ensuring a memorable stay. Whether you're here for adventure or relaxation, Hotel Aster is your one-stop solution for accommodation and expert tour planning.
            </p>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-heading text-center text-secondary mb-12">Comfortable Rooms with Himalayan Views</h2>
          <div className="space-y-16">
            {roomData.map(room => (
              <div key={room.name} className="flex flex-col md:flex-row gap-8 items-center bg-background p-6 rounded-lg shadow-md">
                <img src={room.image} alt={`Image of ${room.name}`} className="w-full md:w-1/3 h-64 object-cover rounded-md" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold font-heading text-primary">{room.name}</h3>
                  <p className="text-gray-600 mt-2 mb-4">{room.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.bestFor.map(item => <span key={item} className="bg-accent/30 text-secondary text-xs font-semibold px-2 py-1 rounded-full">{item}</span>)}
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-700">
                      <thead className="text-xs text-secondary uppercase bg-gray-200">
                        <tr>
                          <th scope="col" className="px-4 py-2">Plan</th>
                          <th scope="col" className="px-4 py-2">Season Price</th>
                          <th scope="col" className="px-4 py-2">Off-Season Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="px-4 py-2 font-medium">EP (Room Only)</td>
                          <td className="px-4 py-2">₹{room.pricing.season.ep.toLocaleString('en-IN')}</td>
                          <td className="px-4 py-2">₹{room.pricing.offSeason.ep.toLocaleString('en-IN')}</td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-4 py-2 font-medium">CP (with Breakfast)</td>
                          <td className="px-4 py-2">₹{room.pricing.season.cp.toLocaleString('en-IN')}</td>
                          <td className="px-4 py-2">₹{room.pricing.offSeason.cp.toLocaleString('en-IN')}</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-medium">MAP (with Breakfast & Dinner)</td>
                          <td className="px-4 py-2">₹{room.pricing.season.map.toLocaleString('en-IN')}</td>
                          <td className="px-4 py-2">₹{room.pricing.offSeason.map.toLocaleString('en-IN')}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-6 text-right">
                    <Link
                        to={`/booking/hotel-aster-${room.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`}
                        className="bg-primary text-white font-bold py-2 px-6 rounded-full hover:bg-orange-600 transition-colors duration-300 shadow-md inline-block"
                    >
                        Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold font-heading text-secondary mb-12">Our Facilities & Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {facilities.map(facility => (
                    <div key={facility.name} className="flex flex-col items-center p-4">
                        <div className="text-primary mb-3">{facility.icon}</div>
                        <h3 className="font-semibold text-secondary text-center">{facility.name}</h3>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-heading text-center text-secondary mb-12">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg aspect-square">
                 <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Booking & Contact Section */}
       <section id="contact" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold font-heading mb-4">Book Your Stay With Us</h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-8">
            Ready for your Gangtok adventure? Contact us directly for the best rates, instant confirmation, and personalized tour packages.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
            <div>
                <h4 className="font-bold text-accent">Phone / WhatsApp</h4>
                <a href="tel:+918159835002" className="text-xl hover:underline">+91 8159835002</a>
            </div>
             <div>
                <h4 className="font-bold text-accent">Email</h4>
                <a href="mailto:reservation@asterholidays.in" className="text-xl hover:underline">reservation@asterholidays.in</a>
            </div>
          </div>
          <p className="font-semibold">M.P.Golai, Tadong, Gangtok, Sikkim 737102</p>
           <div className="mt-8">
                <Link to="/#footer-contact" className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-colors duration-300 shadow-lg text-lg">
                    Send an Inquiry
                </Link>
            </div>
        </div>
      </section>

    </div>
  );
};

export default HotelAsterGangtok;