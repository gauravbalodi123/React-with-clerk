import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

const MainNavigation = () => {
  const { isSignedIn } = useUser(); // here im checking whether the user is signed in or not

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container-fluid">
        
        <button className="navbar-brand btn btn-light text-primary fw-bold px-3 py-1 rounded-pill">
          FocusFlow
        </button>

        {/* this is the code for the searchbar */}
        <form className="d-flex mx-auto w-50">
          <input
            type="text"
            className="form-control rounded-pill"
            placeholder="Search My workspace"
            aria-label="Search workspace"
          />
        </form>

        {/* here i will toggle the login and logout on based on clerk sign in or sign out */}
        <div className="d-flex align-items-center">
          {isSignedIn ? (
            // here to Show Sign out button when user is signed in
            <Link to="/signout" className="btn btn-light rounded-circle p-2" aria-label="Sign Out">
              Sign Out
            </Link>
          ) : (
            //here to Show Log In button when user is signed out
            <Link to="/login" className="btn btn-light rounded-circle p-2" aria-label="Log In">
              Log In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
