import React, { Fragment, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MainNavigation from './Components/MainNavigation/MainNavigation';
import Issues from './Components/Pages/Issues';
import NewIssue from './Components/Pages/NewIssue';
import SideNavigation from './Components/MainNavigation/SideNavigation';
import Show from './Components/Pages/Show';
import Edittasks from './Components/Pages/Edittasks';
import Main from './Components/Pages/Mainpage';
import { SignedIn, SignedOut, RedirectToSignIn, UserButton, useClerk } from '@clerk/clerk-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const { signOut} = useClerk(); 
  const navigate = useNavigate();

  // automatically will be signed out when /signout path is accessed
  useEffect(() => {
    if (window.location.pathname === '/signout') {
      signOut(); 
      navigate('/');
    } else if (window.location.pathname === '/login') {
      navigate('/login'); 
    }
  }, [window.location.pathname, signOut, navigate]);


  return (
    <Fragment>
      <header>
       
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>

      <MainNavigation />
      <div style={{ overflowX: 'hidden' }}>
        <SideNavigation />
        <div className="mt-5" style={{ width: 'calc(100vw - 15rem)', marginLeft: '15rem' }}>
          <Routes>
            {/* Public Routes */}
            <Route path="/issue" element={<Issues />} />
            <Route path="/" element={<Main />} />

            {/* this is to redirect signedout users to signin page */}
            <Route
              path="/newissue"
              element={
                <>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>

                  <SignedIn>
                    <NewIssue />
                  </SignedIn>
                </>
              }
            />
            <Route
              path="/login"
              element={
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              }
            />

            <Route
              path="/tasks/:id"
              element={
                <>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>

                  <SignedIn>
                    <Show />
                  </SignedIn>

                </>
              }
            />
            <Route
              path="/tasks/edit/:id"
              element={
                <>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>

                  <SignedIn>
                    <Edittasks />
                  </SignedIn>
                </>
              }
            />

          </Routes>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
