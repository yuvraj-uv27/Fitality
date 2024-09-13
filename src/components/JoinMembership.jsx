import React, { useState } from "react";

const Popup = ({ message, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4">{message}</h2>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  </div>
);

const JoinMembership = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleJoinNowClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section
      className="max-w-7xl bg-gray-950 mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://wallpaperset.com/w/full/a/3/d/45475.jpg')",
      }}
    >
      <h1 className="text-yellow-400 text-6xl font-bold text-center">
        Join Our Membership
      </h1>
      <button
        className="bg-white text-blue-950 font-bold py-2 px-6 rounded-full mt-6 hover:bg-yellow-500"
        onClick={handleJoinNowClick}
      >
        Join Now
      </button>
      <p className="text-white text-3xl font-bold text-center mt-4">
        Best Value for a Full Year
      </p>
      <p className="text-white text-3xl font-bold text-center">
        Get an Additional Year for Free
      </p>
      <div className="text-center mt-8">
        <h2 className="text-3xl font-bold text-white">
          Ready to Train with the Best?
        </h2>
        <p className="mt-4 text-gray-300">
          Join one of our expert trainers today and start your journey towards
          a healthier, stronger you!
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800"
        >
          Contact Us
        </a>
      </div>

      {showPopup && (
        <Popup message="GYM not operating yet" onClose={closePopup} />
      )}
    </section>
  );
};

export default JoinMembership;
