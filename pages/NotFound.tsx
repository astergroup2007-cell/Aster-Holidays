import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-6">
      <div className="max-w-md">
        <h1 className="text-9xl font-extrabold text-primary">404</h1>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
          Page Not Found
        </h2>
        <p className="mt-4 text-base text-gray-600">
          Oops! It seems the page you were looking for doesn't exist. Maybe you typed in the wrong URL or the page has been moved.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="inline-block rounded-md bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;