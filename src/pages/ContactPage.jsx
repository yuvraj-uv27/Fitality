import React, { useState } from "react";
import Menu from "../components/Menu";
import HomeIcon from "../components/HomeIcon";

const ContactPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending message logic here

    // Show the popup
    setShowPopup(true);

    // Hide the popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/846388850/photo/young-man-exercising-with-weight-in-the-gym.jpg?s=1024x1024&w=is&k=20&c=o0t1WbkbVOITRf5MhS5m2KAlQ6whSv9mJ_ISU4tzyZ0=')",
          filter: "brightness(0.5)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <HomeIcon />
        <Menu />
        <div className="flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-5xl font-bold mb-8">CONTACT US</h1>

          <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              We're Here to Help
            </h2>
            <p className="text-gray-700 mb-4">
              Have questions or need assistance? Reach out to us!
            </p>

            {/* Contact Information */}
            <div className="space-y-4">
              <p className="text-lg font-semibold text-gray-900">
                <span className="font-bold">Phone:</span> +91 1234567890
              </p>
              <p className="text-lg font-semibold text-gray-900">
                <span className="font-bold">Email:</span>{" "}
                info@fitality.com
              </p>
              <p className="text-lg font-semibold text-gray-900">
                <span className="font-bold">Address:</span> 123 Gym Street,
                Fitness City
              </p>
            </div>

            {/* Contact Form */}
            <div className="mt-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg border border-gray-300"
                  aria-label="Your Name"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg border border-gray-300"
                  aria-label="Your Email"
                  required
                />
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full p-3 rounded-lg border border-gray-300"
                  aria-label="Your Message"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Message */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          aria-live="assertive"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Message sent Unsuccessfully
            </h2>
            <p>Please try again later.</p>
            <button
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
