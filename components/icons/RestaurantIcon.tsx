
import React from 'react';

const RestaurantIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5m18-6H3v6a2 2 0 002 2h14a2 2 0 002-2V9zM12 9V4m0 0a2 2 0 100 4 2 2 0 000-4z" />
    </svg>
);

export default RestaurantIcon;
