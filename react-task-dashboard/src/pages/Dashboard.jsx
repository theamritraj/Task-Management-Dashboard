import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      alert(`Signed up with Email: ${formData.email}`);
    } else {
      if (
        formData.email === 'Admin@123' &&
        formData.password === 'Admin12345'
      ) {
        alert(`Login successful`);
        navigate('/tasks'); // ✅ Redirect to TaskPage
      } else {
        alert('Invalid email or password ❌');
        return;
      }
    }

    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div className="flex mt-15 items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isSignup ? 'Sign Up' : 'Login'}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {isSignup && (
            <div className="mb-4">
              <label className="block mb-1 text-sm">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold"
          >
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-blue-700 font-semibold hover:underline"
          >
            {isSignup ? 'Login here' : 'Sign up here'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
