import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({ firstName: '', lastName: '', username: '', email: '', password: '', secret: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formState }
      });
    
      auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return(
    <section className='signup'>
      <h2 className='title'>Sign-Up</h2>
      <p className='subtitle'>Already have an account?<a href='/login' className='link'> Log-In Here!</a></p>
      <form onSubmit={handleFormSubmit} className='signupForm'>
        <input
          placeholder='Your first name'
          name='firstName'
          type='firstName'
          id='firstName'
          value={formState.firstName}
          onChange={handleChange}
          className='input'
        />
        <input
          placeholder='Your last name'
          name='lastName'
          type='lastName'
          id='lastName'
          value={formState.lastName}
          onChange={handleChange}
          className='input'
        />
        <input
          placeholder='Your username'
          name='username'
          type='username'
          id='username'
          value={formState.username}
          onChange={handleChange}
          className='input'
        />
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
          placeholder='Your password'
          name='password'
          type='password'
          id='password'
          value={formState.password}
          onChange={handleChange}
          className='input'
        />
        <input
          placeholder='SECRET'
          name='secret'
          type='secret'
          id='secret'
          value={formState.secret}
          onChange={handleChange}
          className='input'
        />
        <button type='submit' className='button'>
          Submit
        </button>
      </form>
      {error && <div>Sign-Up failed</div>}
    </section>
  )
};

export default Signup;