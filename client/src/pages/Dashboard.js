import React from 'react';
import Auth from '../utils/auth';
import Search from '../components/Search';
import ApplicationForm from '../components/ApplicationForm';


const Dashboard = () => {
  const loggedIn = Auth.loggedIn();
  if(!loggedIn){
    return(
      <h2 className='title'>Please Login to view your dashboard!</h2>
    );
  }
  return(
    <section>
      <h2 className='title'>Dashboard</h2>
      <div className='dashboard'>
        <div className='dashboardSection'>
          <ApplicationForm/>
        </div>
        <div className='dashboardSection'>
          <Search/>
        </div>
        
        
      </div>
    </section>
  )
};

export default Dashboard;