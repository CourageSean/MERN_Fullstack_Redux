import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const initialState = { email: '', password: '' };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className='auth_page'>
      <form>
        <h3 className='text-upercase'>Sean's Social-Media</h3>
        <div className='form-group'>
          <label htmlFor='exampleInputEmail1'>Email address</label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            onChange={handleChangeInput}
            name='email'
            value={email}
          />
          <small id='emailHelp' className='form-text text-muted'>
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className='form-group'>
          <label htmlFor='exampleInputPassword1'>Password</label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            onChange={handleChangeInput}
            name='password'
            value={password}
          />
        </div>

        <button
          type='submit'
          className='btn btn-dark w-100'
          disabled={email && password ? false : true}
        >
          Login
        </button>

        <p className='my-2'>
          You don't have an account? <Link to='/register'> Register Now</Link>
        </p>
      </form>
    </div>
  );
}
