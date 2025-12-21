import React, { useState } from 'react';
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

const InputField: React.FC<{ id: string, label: string, type: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, placeholder?: string, required?: boolean, icon: React.ReactNode }> = 
({ id, label, type, value, onChange, placeholder, required = true, icon }) => (
  <div className="relative w-full group">
    <label htmlFor={id} className="block text-xs md:text-sm font-bold text-gray-700 mb-1.5 uppercase tracking-wide px-1">{label}</label>
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
        {icon}
      </div>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="w-full pl-11 pr-4 py-3.5 md:py-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-secondary placeholder:text-gray-400 font-medium"
        placeholder={placeholder}
        required={required}
      />
    </div>
  </div>
);

const SelectField: React.FC<{ id: string, label: string, value: string, onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void, icon: React.ReactNode, children: React.ReactNode }> = 
({ id, label, value, onChange, icon, children }) => (
   <div className="relative w-full group">
    <label htmlFor={id} className="block text-xs md:text-sm font-bold text-gray-700 mb-1.5 uppercase tracking-wide px-1">{label}</label>
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors pointer-events-none z-10">
        {icon}
      </div>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="w-full pl-11 pr-10 py-3.5 md:py-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 appearance-none text-secondary font-medium cursor-pointer"
      >
        {children}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </div>
    </div>
  </div>
);

const SearchForm: React.FC = () => {
  const navigate = useNavigate();

  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Guests');

  const handlePackageSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/hotels');
  };
  
  return (
    <div className="bg-white/95 backdrop-blur-xl p-5 md:p-8 rounded-[2rem] shadow-2xl w-full max-w-5xl mx-auto border border-white/20">
      <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
        <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
          <HotelIcon />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-secondary">Find Your Package</h2>
          <p className="text-xs md:text-sm text-gray-500 font-medium">Explore North East India with experts</p>
        </div>
      </div>
      
      <form onSubmit={handlePackageSearch} className="space-y-6 md:space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          <InputField 
            id="destination" 
            label="Destination" 
            type="text" 
            value={destination} 
            onChange={(e) => setDestination(e.target.value)} 
            placeholder="Goa, Sikkim, Bhutan..." 
            icon={<LocationIcon />} 
          />
          
          <SelectField 
            id="guests" 
            label="Travelers" 
            value={guests} 
            onChange={(e) => setGuests(e.target.value)} 
            icon={<UserIcon />}
          >
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
            <option>5+ Guests</option>
          </SelectField>

          <InputField 
            id="check-in" 
            label="Departure" 
            type="date" 
            value={checkIn} 
            onChange={(e) => setCheckIn(e.target.value)} 
            icon={<CalendarIcon />} 
          />
          
          <InputField 
            id="check-out" 
            label="Return" 
            type="date" 
            value={checkOut} 
            onChange={(e) => setCheckOut(e.target.value)} 
            icon={<CalendarIcon />} 
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-2 border-t border-gray-100 mt-6">
          <div className="hidden lg:flex items-center gap-4 text-gray-400">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
              ))}
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider">+10k Happy Travelers</p>
          </div>
          
          <button 
            type="submit" 
            className="w-full md:w-auto min-w-[200px] flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-primary text-white font-bold py-4 px-10 rounded-2xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 active:scale-95"
          >
            <span className="text-lg">Search Packages</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;