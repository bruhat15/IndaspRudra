import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [couponCode, setCouponCode] = useState('');
  const [error, setError] = useState('');
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const validateCoupon = () => {
    // Example valid coupon codes
    const validCoupons = ['INDASP2024', 'PATENT2024'];
    
    if (validCoupons.includes(couponCode.toUpperCase())) {
      window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdQ-Zvzg7NBqr8tfzHnoy3QOP0tJM8Kt48ZH7RL3Vk89KcGoQ/viewform';
    } else {
      setError('Invalid coupon code. Please try again.');
    }
  };

  const handleNoCoupon = () => {
  navigate("/dummy-form");
};


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Registration
          </h2>
          <div className="mt-4 text-center">
            <div className="text-red-600 font-semibold">
              Time Remaining: {formatTime(timeLeft)}
            </div>
          </div>
        </div>
        
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="coupon-code" className="sr-only">
                Coupon Code
              </label>
              <input
                id="coupon-code"
                name="coupon"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Enter Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center">
              {error}
            </div>
          )}

          <div className="flex flex-col space-y-4">
            <button
              onClick={validateCoupon}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Validate Coupon
            </button>
            
            <button
              onClick={handleNoCoupon}
              className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              I Don't Have a Coupon Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
