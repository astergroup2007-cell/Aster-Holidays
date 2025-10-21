
import React from 'react';

const ParkingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-16H8a4 4 0 00-4 4v8a4 4 0 004 4h12a3 3 0 003-3V7a3 3 0 00-3-3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3m-3 4h4" />
    </svg>
);

export default ParkingIcon;
