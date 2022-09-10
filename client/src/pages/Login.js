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
    <section className='login'>
      <h2 className='title'>Log-In</h2>
      <p className='subtitle'>Need to make an account? <a href='/signup' className='link'> Sign-Up Here!</a></p>
      <form onSubmit={handleFormSubmit} className='loginForm'>
        <input
          placeholder='Your email'
          name='email'
          type='email'
          id='email'
          value={formState.email}
          onChange={handleChange}
          className='input'
        />
        <input
          placeholder='******'
          name='password'
          type='password'
          id='password'
          value={formState.password}
          onChange={handleChange}
          className='input'
        />
        <button type='submit' className='button'>
          Submit
        </button>
      </form>
      {error && <div>Log-In failed</div>}
    </section>
  )
};

export default Login;