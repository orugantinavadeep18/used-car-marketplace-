// src/components/AuthCard.jsx
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from './AuthContext';
import { auth, googleProvider } from '../Login/firebase';
import { signInWithPopup } from 'firebase/auth';

const AuthCard = ({ isLogin, toggleForm }) => {
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    address: '',
  });

  const inputClass =
    'w-full px-4 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent';

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminUser = {
      email: 'admin@example.com',
      password: 'admin123',
      fullName: 'Admin',
      id: 'admin',
      role: 'admin',
    };

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    if (isLogin) {
      if (
        formData.email === adminUser.email &&
        formData.password === adminUser.password
      ) {
        login(adminUser);
        return;
      }

      const matchedUser = storedUsers.find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );

      if (matchedUser) {
        login(matchedUser);
      } else {
        alert('Invalid email or password');
      }
    } else {
      const isEmailTaken = storedUsers.some(
        (user) => user.email === formData.email
      );

      if (formData.email === adminUser.email) {
        alert('This email is reserved for admin.');
        return;
      }

      if (isEmailTaken) {
        alert('Email already exists.');
        return;
      }

      const newUser = {
        email: formData.email,
        fullName: formData.fullName,
        mobile: formData.mobile || '',
        address: formData.address || '',
        password: formData.password,
        id: Date.now(),
      };

      const updatedUsers = [...storedUsers, newUser];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      login(newUser);
    }
  };

  // ✅ FIXED: Moved outside handleSubmit
  const handleGoogleSignIn = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = {
      email: result.user.email,
      fullName: result.user.displayName,
      id: result.user.uid,
    };

    login(user);
  } catch (error) {
    console.error("Google Sign-In error:", error);
    alert("Google Sign-In failed");
  }
 };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border-2 border-black shadow-3xl rounded-xl p-8 w-full max-w-md"
    >
      <h2 className="text-2xl font-bold mb-6">
        {isLogin ? 'Sign In' : 'Sign Up'}
      </h2>

      {!isLogin && (
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className={inputClass + ' mb-4'}
          onChange={handleChange}
          required
        />
      )}

      <input
        type="email"
        name="email"
        placeholder="Email"
        className={inputClass + ' mb-4'}
        onChange={handleChange}
        required
      />

      {!isLogin && (
        <input
          type="text"
          name="mobile"
          placeholder="Phone"
          className={inputClass + ' mb-4'}
          onChange={handleChange}
          required
        />
      )}

      <input
        type="password"
        name="password"
        placeholder="Password"
        className={inputClass + ' mb-4'}
        onChange={handleChange}
        required
      />

      {isLogin && (
        <div className="text-right text-sm text-blue-600 hover:underline cursor-pointer mb-2">
          Forgot Password?
        </div>
      )}

      <button
        type="submit"
        className="bg-green-600 text-white w-full py-2 rounded mt-2 hover:bg-green-700 transition"
      >
        {isLogin ? 'Sign In' : 'Sign Up'}
      </button>

      <div className="flex items-center gap-2 my-4">
        <hr className="flex-grow border-gray-300" />
        <span className="text-sm text-gray-500">OR</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      <button
        type="button"
        onClick={handleGoogleSignIn}
        className="border border-gray-300 w-full py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-100 transition"
      >
        <FcGoogle size={20} />
        Sign {isLogin ? 'in' : 'up'} with Google
      </button>

      <p className="mt-4 text-sm text-center">
        {isLogin ? (
          <>
            Not have an account?{' '}
            <span className="text-blue-600 cursor-pointer" onClick={toggleForm}>
              Sign Up
            </span>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <span className="text-blue-600 cursor-pointer" onClick={toggleForm}>
              Sign In
            </span>
          </>
        )}
      </p>
    </form>
  );
};

export default AuthCard;
