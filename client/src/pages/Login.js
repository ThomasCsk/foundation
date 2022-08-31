import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState }
      });
    
      auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  return(
    <section>
      <h2>Log-In</h2>
      <p>Need to make an account? <a href='/signup'>Sign-Up Here!</a></p>
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder='Your email'
          name='email'
          type='email'
          id='email'
          value={formState.email}
          onChange={handleChange}
        />
        <input
          placeholder='******'
          name='password'
          type='password'
          id='password'
          value={formState.password}
          onChange={handleChange}
        />
        <button type='submit'>
          Submit
        </button>
      </form>
      {error && <div>Log-In failed</div>}
    </section>
  )
};

export default Login;