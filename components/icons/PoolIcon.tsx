
import React from 'react';

const PoolIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 002-2v-1a2 2 0 012-2h1.945M10 6.341a5.5 5.5 0 115.5 0M10 6.341V3m5.5 3.341V3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 10l.01 0M15 10l.01 0" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 16s1 1 2 1 2-1 2-1" />
  </svg>
);

export default PoolIcon;
