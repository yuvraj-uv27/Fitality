import React, { useState } from "react";
import Menu from "../components/Menu";
import HomeIcon from "../components/HomeIcon";
import { Link } from "react-router-dom";

const rates = [
  {
    id: 1,
    plan: "1 Month Membership",
    price: "₹3000",
    description: "Perfect for a short-term commitment.",
  },
  {
    id: 2,
    plan: "3 Month Membership",
    price: "₹6000",
    description: "Get into a consistent routine with this plan.",
  },
  {
    id: 3,
    plan: "6 Month Membership",
    price: "₹10000",
    description: "Ideal for achieving longer-term goals.",
  },
  {
    id: 4,
    plan: "12 Month Membership",
    price: "₹12000",
    description: "Best value for a full year of fitness journey.",
  },
  {
    id: 5,
    plan: "2 Years + 1 Year Free",
    price: "₹24000",
    description: "New plan - Best offer! Get an additional year for free.",
    highlight: true,
  },
  {
    id: 6,
    plan: "3 Years + 2 Years Free",
    price: "₹40000",
    description: "Big plan - Best offer! Get two additional years for free.",
    highlight: true,
  },
];

const Rates = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleJoinNowClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div
        className="min-h-screen py-10 flex flex-col items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?cs=srgb&dl=pexels-leonardho-1552242.jpg&fm=jpg')",
        }}
      >
        <HomeIcon />
        <Menu />
        <div className="bg-transparent bg-opacity-90 max-w-6xl mx-auto p-8 rounded-lg shadow-2xl">
          <h1 className="text-6xl font-extrabold text-center text-yellow-300 mb-12">
            OUR RATES
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rates.map((rate) => (
              <div
                key={rate.id}
                className={`bg-white bg-opacity-70 shadow-xl rounded-lg p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 ${
                  rate.highlight ? "border-4 border-blue-600" : ""
                } ${
                  rate.id === 6
                    ? "bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white"
                    : ""
                }`}
              >
                <h2 className="text-2xl font-bold mt-4">{rate.plan}</h2>
                <p
                  className={`text-3xl font-extrabold mt-2 ${
                    rate.id === 6 ? "text-yellow-200" : "text-blue-600"
                  }`}
                >
                  {rate.price}
                </p>
                <p
                  className={`mt-2 ${
                    rate.id === 6 ? "text-yellow-100" : "text-gray-600"
                  }`}
                >
                  {rate.description}
                </p>
                {rate.highlight && (
                  <div className="bg-yellow-400 text-yellow-900 font-bold px-3 py-1 rounded-full mt-4">
                    Best Offer
                  </div>
                )}
                <button
                  className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full mt-6 hover:bg-blue-500"
                  onClick={handleJoinNowClick}
                >
                  Join Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Popup */}
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative bg-white p-8 rounded-lg shadow-lg text-center">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                onClick={closePopup}
                aria-label="Close popup"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4">
                Visit our gym for more details
              </h2>
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
                onClick={closePopup}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rates;
