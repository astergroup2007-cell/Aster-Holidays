import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// --- INLINE SVG ICONS ---
const LocationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const CalendarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const UserIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const HotelIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);

const AirplaneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
);


const SearchForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hotels' | 'flights'>('hotels');
  const navigate = useNavigate();

  // Hotel state
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Guests');

  // Flight state
  const [origin, setOrigin] = useState('');
  const [flightDestination, setFlightDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState('1 Passenger, Economy');
  const [isReturn, setIsReturn] = useState(true);

  const handleHotelSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/hotels');
  };
  
  const handleFlightSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/flights');
  };
  
  const InputField: React.FC<{ id: string, label: string, type: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, placeholder?: string, required?: boolean, icon: React.ReactNode }> = 
  ({ id, label, type, value, onChange, placeholder, required = true, icon }) => (
    <div className="relative w-full">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="absolute left-3 bottom-3.5 text-gray-400 pointer-events-none">
        {icon}
      </div>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-3 py-3 border border-gray-200 bg-white/50 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );

  const SelectField: React.FC<{ id: string, label: string, value: string, onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void, icon: React.ReactNode, children: React.ReactNode }> = 
  ({ id, label, value, onChange, icon, children }) => (
     <div className="relative w-full">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="absolute left-3 bottom-3.5 text-gray-400 pointer-events-none">
        {icon}
      </div>
       <select
        id={id}
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-8 py-3 border border-gray-200 bg-white/50 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300 appearance-none"
      >
        {children}
      </select>
       <div className="absolute right-4 bottom-4 text-gray-400 pointer-events-none">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </div>
    </div>
  );


  return (
    <div className="bg-white/70 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-2xl w-full transition-all duration-500">
      {/* Tabs */}
      <div className="flex mb-6 border-b border-gray-200">
        <button 
          onClick={() => setActiveTab('hotels')}
          className={`relative py-3 px-6 text-lg font-bold transition-colors duration-300 ${activeTab === 'hotels' ? 'text-secondary' : 'text-gray-500 hover:text-secondary'}`}
        >
          <span><HotelIcon className="inline-block mr-2 h-5 w-5" />Hotels</span>
          {activeTab === 'hotels' && <div className="absolute bottom-[-1px] left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full" />}
        </button>
        <button 
          onClick={() => setActiveTab('flights')}
          className={`relative py-3 px-6 text-lg font-bold transition-colors duration-300 ${activeTab === 'flights' ? 'text-secondary' : 'text-gray-500 hover:text-secondary'}`}
        >
          <span><AirplaneIcon className="inline-block mr-2 h-5 w-5" />Flights</span>
          {activeTab === 'flights' && <div className="absolute bottom-[-1px] left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full" />}
        </button>
      </div>
      
      {/* Hotels Form */}
      <div style={{ display: activeTab === 'hotels' ? 'block' : 'none' }}>
        <form onSubmit={handleHotelSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end animate-fade-in-up">
          <InputField id="destination" label="Destination" type="text" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="e.g. Goa, Manali..." icon={<LocationIcon />} />
          <InputField id="check-in" label="Check-in" type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} icon={<CalendarIcon />} />
          <InputField id="check-out" label="Check-out" type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} icon={<CalendarIcon />} />
          <SelectField id="guests" label="Guests" value={guests} onChange={(e) => setGuests(e.target.value)} icon={<UserIcon />}>
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
            <option>5+ Guests</option>
          </SelectField>
          <button type="submit" className="w-full lg:col-span-1 flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-primary text-white font-bold py-3.5 px-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.03] transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary h-[54px] mt-2 sm:mt-0">
            <HotelIcon />
            <span>Search</span>
          </button>
        </form>
      </div>


      {/* Flights Form */}
      <div style={{ display: activeTab === 'flights' ? 'block' : 'none' }}>
         <form onSubmit={handleFlightSearch} className="space-y-4 animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField id="origin" label="From" type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} placeholder="Origin" icon={<LocationIcon />} />
              <InputField id="flight-destination" label="To" type="text" value={flightDestination} onChange={(e) => setFlightDestination(e.target.value)} placeholder="Destination" icon={<LocationIcon />} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <InputField id="departure-date" label="Departure" type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} icon={<CalendarIcon />} />
              {isReturn && (
                 <InputField id="return-date" label="Return" type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} icon={<CalendarIcon />} />
              )}
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SelectField id="passengers" label="Passengers & Class" value={passengers} onChange={(e) => setPassengers(e.target.value)} icon={<UserIcon />}>
                    <option>1 Passenger, Economy</option>
                    <option>2 Passengers, Economy</option>
                    <option>1 Passenger, Business</option>
                </SelectField>
             </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <label className="flex items-center space-x-2 text-gray-700 select-none cursor-pointer">
                  <input type="checkbox" checked={isReturn} onChange={() => setIsReturn(!isReturn)} className="rounded text-primary focus:ring-primary/50 h-4 w-4" />
                  <span>Return trip</span>
                </label>
                <button type="submit" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-primary text-white font-bold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.03] transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  <AirplaneIcon />
                  <span>Search Flights</span>
                </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
