import React from 'react';

const ErrorElement = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-custom-blue">
      <div className="text-center p-8 bg-custom-charcoal border rounded-lg shadow-lg max-w-md mx-auto transition-transform hover:scale-105">
        <h1 className="text-6xl font-bold text-orange-600 mb-4">Oops!</h1>
        <p className="text-xl text-gray-200 mb-4">
          Something went wrong. We couldn't find the page you're looking for.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-orange-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-300"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default ErrorElement;
