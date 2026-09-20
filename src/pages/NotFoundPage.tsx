import React from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../utils/usePageMeta';

const NotFoundPage: React.FC = () => {
  usePageMeta('Page Not Found', 'The page you were looking for could not be found. Return to the Webb Chapel church of Christ home page.');

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          Sorry, we couldn't find the page you were looking for.
        </p>
        <Link
          to="/"
          className="inline-block bg-church-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
        >
          Go to the Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
