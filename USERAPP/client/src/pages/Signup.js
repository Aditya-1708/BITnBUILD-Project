import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await fetch('/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        navigate('/homepage');
      } else {
        const data = await response.json();
        console.error('Signup failed:', data.error);
      }
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="bg-opacity-20 max-w-[950px] rounded-2xl shadow-2xl shadow-black py-5 px-0.25 gap-6">
        <div className="px-16">
          <h2 className="pt-4 font-bold text-2xl">Sign Up</h2>
          <p className="text-sm mt-1">
            If you are not a member yet, sign up now.
          </p>
          <form
            className="flex flex-col gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              handleSignup();
            }}
          >
            <input
              className="placeholder-gray-500 font-semibold py-1 px-2 mt-10 rounded-xl border border-blue-300"
              type="text"
              name="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative">
              <input
                className="placeholder-gray-500 font-semibold w-full py-1 px-2 mt-2 rounded-xl border-blue-300"
                type="password"
                name="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="grey"
                className="bi bi-eye absolute top-1 right-2 translate-y-3.5"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
              </svg>
            </div>
            <button
              className="rounded-2xl text-white bg-blue-500 hover:bg-blue-800 px-1 py-2 mt-2"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signup;
