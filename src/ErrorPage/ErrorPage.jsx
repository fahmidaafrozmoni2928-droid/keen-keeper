import React from "react";



import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center max-w-md">
        
        {/* Icon */}
        <div className="text-6xl mb-4">😕</div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Oops! Something went wrong
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 mb-6">
          We couldn’t load this page. It might be a temporary issue.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-3">
          <button
            onClick={() => window.location.reload()}
            className="btn btn-primary"
          >
            Refresh
          </button>

          <Link to="/" className="btn btn-outline">
            Go Home
          </Link>
        </div>

        {/* Extra message */}
        <p className="text-sm text-gray-400 mt-6">
          Error code: 500
        </p>
      </div>
    </div>
  );
};



export default ErrorPage;