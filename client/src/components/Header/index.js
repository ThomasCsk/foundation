import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import auth from '../../utils/auth';
import { QUERY_ME_BASIC } from '../../utils/queries';

const Header = () => {

  const loggedIn = auth.loggedIn();
  const logout = e => {
    auth.logout();
  }
  const {data} = useQuery(QUERY_ME_BASIC)
  const user = data?.me || {}
  return(
    <header>
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <Link to="/dashboard">
        <h3>Dashboard</h3>
      </Link>
      {!loggedIn?(
      <div>
        <Link to="/login">
          <h3>Log-In</h3>
        </Link>
        <Link to="/signup">
          <h3>Sign-Up</h3>
        </Link>
      </div>
      ):(  
      <div>
        {user?(<p>Welcome, {user.username}</p>):(<></>)}
        <a href='/' onClick={logout}>Sign-Out</a>
      </div>
      
      )}
    </header>
  )
};

export default Header;