// src/pages/SignUpPage.jsx
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

const SignUpPage = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up data:', form);
    // TODO: Send data to backend or Firebase
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.jpg')" }} // replace with your image path
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl px-8 py-10 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
          className="input-style"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="input-style"
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="input-style"
          required
        />

        <div className="relative">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="input-style pr-10"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white w-full py-2 rounded mt-4 hover:bg-green-700 transition"
        >
          Sign Up
        </button>

        <div className="flex items-center gap-2 my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="text-sm text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button
          type="button"
          className="border border-gray-300 w-full py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-100 transition"
        >
          <FcGoogle size={20} />
          Sign Up with Google
        </button>

        <p className="mt-4 text-sm text-center">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
