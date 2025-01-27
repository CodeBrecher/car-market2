import { UserButton, useUser, useClerk } from '@clerk/clerk-react';
import React from 'react';
import { Button } from './button';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { user, isSignedIn } = useUser();
  const { openSignIn } = useClerk();

  const handleSubmitListingClick = () => {
    if (isSignedIn) {
      // Redirect to the listing submission page
      window.location.href = '/submit-listing';
    } else {
      // Open the Clerk sign-in modal
      openSignIn();
    }
  };

  return (
    <div className="flex justify-between items-center shadow-sm p-5 fixed top-0 left-0 w-full bg-white z-50 h-[80px]">
      {/* Logo */}
      <img src="/logo.svg" width={150} height={10} alt="Logo" />

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-16">
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          <Link to="/" className="text-black hover:text-primary">Home</Link>
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          <Link to="/search" className="text-black hover:text-primary">Search</Link>
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          <Link to="/about" className="text-black hover:text-primary">About Us</Link>
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          <Link to="/search?cars=New&" className="text-black hover:text-primary">New</Link>
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          <Link to="/search?cars=Used&" className="text-black hover:text-primary">Preowned</Link>
        </li>
      </ul>

      {/* User and Submit Listing Button */}
      <div className="flex items-center gap-5">
        {isSignedIn ? (
          <>
            <UserButton />
            <Link to="/profile">
              <Button>Submit Listing</Button>
            </Link>
          </>
        ) : (
          <Button onClick={handleSubmitListingClick}>Submit Listing</Button>
        )}
      </div>
    </div>
  );
};
