import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';
import { QUERY_APPLICATIONS } from '../utils/queries';
import { QUERY_ME_BASIC } from '../utils/queries';

const Home = () => {
  const { data: userData } = useQuery(QUERY_USERS);
  const { data: appData } = useQuery(QUERY_APPLICATIONS);
  const { data: meData } = useQuery(QUERY_ME_BASIC);

  const logData = () => {
    console.log(userData);
    console.log(appData);
    console.log(meData);
  }
  return(
    <div>
      Home
      <button onClick={logData}>Button</button>
    </div>
  )
};

export default Home;