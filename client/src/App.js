import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import LogInSignUp from './pages/LoginSignUp'


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header/>
          <div>
            <Routes>
              <Route
                path="/"
                element={<Home/>}
              />
              <Route
                path="/dashboard"
                element={<Dashboard/>}
              />
              <Route
                path="/loginsignup"
                element={<LogInSignUp/>}
              />
            </Routes>
          </div>
          <Footer/>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;