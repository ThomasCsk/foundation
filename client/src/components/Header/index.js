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
      <h1 className='linkFlex'>Tondo 69er's Foundation</h1>
      <div className='linkFlex'>
        <Link to="/"  className='link'>
          <h3>Home</h3>
        </Link>
        <Link to="/dashboard"  className='link'>
          <h3>Dashboard</h3>
        </Link >
      </div>

      {!loggedIn?(
      <div className='linkFlex'>
        <Link to="/login"  className='link'>
          <h3>Log-In</h3>
        </Link>
        <Link to="/signup"  className='link'>
          <h3>Sign-Up</h3>
        </Link>
      </div>
      ):(  
      <div className='linkFlex'>
        {user?(<p>Welcome, {user.username}</p>):(<></>)}
        <a href='/' onClick={logout} className='link'>Sign-Out</a>
      </div>
      
      )}
    </header>
  )
};

export default Header;