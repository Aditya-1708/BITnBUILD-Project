import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";


function Signin(props) {
  const navigate = useNavigate();
  const [email,setEmail]=useState('');

  const[password,setPassword]=useState('');
  const[redirect,setRedirect]=useState(false);
  async function handleSignin(ev){
    try{
      ev.preventDefault();
      const response=await fetch('http://localhost:4000/users/login',{
      method: 'POST',
      body: JSON.stringify({"username":email,"password":password}),
      headers:{'Content-Type':'application/json'},
      credentials:'include',
    });
    if(response.ok){
      setRedirect(true);
      props.onSignInSuccess();
          }
    else{
      const responseBody=await response.json();
      alert(responseBody.message);
    }
    }catch(error){
      console.log(error);
      alert("Sign-in failed");
    }
  }
  if(redirect){
    return <Navigate to={'/Home'}></Navigate>
  }

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="bg-opacity-20 max-w-[950px] rounded-2xl shadow-2xl shadow-black py-5 px-0.25  gap-6">
        <div className="px-16">
          <h2 className="pt-4 font-bold text-2xl">Login</h2>
          <p className="text-sm mt-1">
            If you are already a member, easily log in.
          </p>
          <form
            className="flex flex-col gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              handleSignin();
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
              Login
            </button>
          </form>
          {/* Other content */}
        </div>
      </div>
    </section>
  );
}

export default Signin;
