import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../utils/auth';

const Header = () => {

  // const loggedIn = auth.loggedIn();
  // const logout = e => {
  //   auth.logout();
  // }

  return(
    <header>
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <Link to="/dashboard">
        <h3>Dashboard</h3>
      </Link>
      {/* !loggedIn?( */}
      <div>
        <Link to="/login">
          <h3>Sign-In</h3>
        </Link>
        <Link to="/signup">
          <h3>Sign-Up</h3>
        </Link>
      </div>
      {/*):(  
      <a href='/' onClick={logout}>Sign-Out</a>
      )*/}
    </header>
  )
};

export default Header;