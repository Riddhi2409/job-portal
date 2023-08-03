import React from 'react';
import google from '../google.svg'

function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div
      className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
    >
      <div className="flex flex-col justify-center p-8 md:p-14">
        <span className="mb-3 text-4xl font-bold">Create Account</span>
        <span className="font-light text-gray-400 mb-8">
        Find your next opportunity!
        </span>
        <button
          className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
        >
          <img src={google} alt="img" className="w-6 h-6 inline mr-2" />
          Sign up with Google
        </button>
        <div className="font-light text-gray-400 mb-8 text-center">or Sign up with Email</div>
        <div className="py-4">
          <span className="mb-2 text-md">Email</span>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            name="email"
            id="email"
          />
        </div>
        <div className="py-4">
          <span className="mb-2 text-md">Password</span>
          <input
            type="password"
            name="pass"
            id="pass"
            className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
          />
        </div>
        <div className="flex justify-between w-full py-4">
          <div className="mr-24">
            <input type="checkbox" name="ch" id="ch" className="mr-2" />
            <span className="text-md">Remember for 30 days</span>
          </div>
          <span className="font-bold text-md cursor-pointer">Forgot password</span>
        </div>
        <button
          className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
        >
          Sign up
        </button>
        
       
        
      </div>
      <div className="relative">
        <img
          src="https://img.freepik.com/premium-photo/flat-illustration-ux-research-team-analyzing-user-data-identifying-patterns_818261-9365.jpg"
          alt="img"
          className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
        />
      </div>
    </div>
  </div>
  )
}

export default SignUp
