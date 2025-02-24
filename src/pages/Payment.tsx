// import React, { useState, useEffect } from 'react';
// import { Loader2 } from 'lucide-react';

// const Payment = () => {
//   const [loading, setLoading] = useState(true);
//   const [requestCount, setRequestCount] = useState(Math.floor(Math.random() * 5000) + 5000);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000);

//     const counterInterval = setInterval(() => {
//       setRequestCount(prev => prev + Math.floor(Math.random() * 10));
//     }, 1000);

//     return () => {
//       clearTimeout(timer);
//       clearInterval(counterInterval);
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg text-center">
//         {loading ? (
//           <div className="space-y-4">
//             <Loader2 className="h-12 w-12 animate-spin mx-auto text-blue-600" />
//             <p className="text-lg font-medium text-gray-900">Processing Payment...</p>
//           </div>
//         ) : (
//           <div className="space-y-6">
//             <div className="text-red-600 text-xl font-bold">
//               Server Busy! Too many registrations at the moment.
//             </div>
//             <div className="text-gray-700">
//               Current Requests: {requestCount.toLocaleString()}
//             </div>
//             <p className="text-gray-600">
//               Please try again later or use a valid coupon code to secure your spot.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Payment;


import React, { useState } from "react";
import PaymentPage from "./pages/Payment";

const PaymentPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [couponCode, setCouponCode] = useState("");

  const handlePayment = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCouponCode("INDIA2025");
    }, 3000); // Simulates server delay
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-wrap w-full max-w-5xl bg-white rounded-lg shadow-md p-6">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-xl font-bold text-center text-gray-800 mb-4">Payment methods</h2>
          <div className="text-center mb-6">
            <span className="text-gray-400 line-through text-lg mr-2">₹1999</span>
            <span className="text-lg font-semibold text-green-600">₹999</span>
          </div>

          <form className="space-y-4">
            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address *
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email address"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
              />
            </div>

            {/* Card Details */}
            <div>
              <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                Card number
              </label>
              <input
                type="text"
                id="card-number"
                placeholder="1234 1234 1234 1234"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiration" className="block text-sm font-medium text-gray-700">
                  Expiration
                </label>
                <input
                  type="text"
                  id="expiration"
                  placeholder="MM / YY"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                  CVC
                </label>
                <input
                  type="text"
                  id="cvc"
                  placeholder="CVC"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handlePayment}
              className="w-full py-3 bg-black text-white text-lg font-medium rounded-md hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-500"
            >
              Pay ₹1999
            </button>
          </form>

          {isLoading && (
            <p className="mt-4 text-center text-red-600">Server busy due to heavy traffic...</p>
          )}

          {couponCode && (
            <p className="mt-4 text-center text-green-600 font-semibold">Your coupon code: {couponCode}</p>
          )}

          <p className="text-sm text-center text-gray-500 mt-4">
            <span className="inline-block align-middle">🔒</span> Payments are secure & encrypted
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 p-4">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <button
              onClick={handlePayment}
              className="flex flex-col items-center py-2 px-4 border rounded-md border-gray-300 bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300"
            >
              <img
                src="../image/paytm.png"
                alt="Paytm"
                className="h-8 mb-2"
              />
              <span className="text-sm">Paytm</span>
            </button>
            <button
              onClick={handlePayment}
              className="flex flex-col items-center py-2 px-4 border rounded-md border-gray-300 bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300"
            >
              <img
                src="../image/phonepe.png"
                alt="PhonePe"
                className="h-8 mb-2"
              />
              <span className="text-sm">PhonePe</span>
            </button>
            <button
              onClick={handlePayment}
              className="flex flex-col items-center py-2 px-4 border rounded-md border-gray-300 bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300"
            >
              <img
                src="../image/gpay.png"
                alt="Google Pay"
                className="h-8 mb-2"
              />
              <span className="text-sm">Google Pay</span>
            </button>
          </div>

          <div className="flex justify-center">
            <img
              src="../image/qr.png"
              alt="QR Code"
              className="w-40 h-40 border border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
