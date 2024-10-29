import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // React Router's hook for navigation

  // List of allowed emails and passwords
  const credentials = [
    { email: 'lexy', password: 'lexy123' },
    { email: 'oliver', password: 'oliver123' },
    { email: 'school', password: 'school123' }
  ];

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the entered credentials match any of the stored credentials
    const userFound = credentials.find(
      (cred) => cred.email === username && cred.password === password
    );

    if (userFound) {
      // If the credentials match, redirect to the desired page
      setError('');
      navigate('/dashboard'); // Redirect to the dashboard or any page
    } else {
      // If credentials don't match, set an error message
      setError('Incorrect username or password.');
    }
  };

  return (
    <div className='min-h-screen grid items-center justify-center bg-[#f0f0f0] p-4'>
      <div className="text-center uppercase">
        <h2 className='text-3xl lg:text-4xl font-bold'>School Management</h2>
        <h2 className='text-3xl lg:text-4xl font-bold'>System</h2>
      </div>
      <div className="bg-slate-300 w-full max-w-[400px] rounded-[20px] p-6 grid gap-6 mt-6 lg:mt-0">
        <h2 className='font-bold text-2xl lg:text-3xl text-center'>Login</h2>
        <form className='grid gap-4' onSubmit={handleSubmit}>
          <div className='grid gap-2'>
            <label className='text-lg lg:text-xl font-semibold'>Username</label>
            <input
              type="text"
              className='w-full h-[40px] rounded-[20px] p-2'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className='grid gap-2'>
            <label className='text-lg lg:text-xl font-semibold'>Password</label>
            <input
              type="password"
              className='w-full h-[40px] rounded-[20px] p-4'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className='text-red-500'>{error}</p>}
          <button type="submit" className="h-[45px] bg-green-600 hover:bg-green-700 w-full text-white rounded-[20px]">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Landing;
