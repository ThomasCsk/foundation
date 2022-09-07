import React from 'react';
import Auth from '../utils/auth';
import Search from '../components/Search';
import ApplicationForm from '../components/ApplicationForm';


const Dashboard = () => {
  const loggedIn = Auth.loggedIn();
  if(!loggedIn){
    return(
      <h2>Please Login to view your dashboard!</h2>
    );
  }
  return(
    <section>
      <h2>Dashboard</h2>
      <div>
        <ApplicationForm/>
        <Search/>
      </div>
    </section>
  )
};

export default Dashboard;