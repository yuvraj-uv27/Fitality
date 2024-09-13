import React, { useState } from "react";

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribeClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <footer
      className="relative bg-gray-800 text-white py-12"
      style={{
        backgroundImage:
          "url('https://t3.ftcdn.net/jpg/03/14/89/52/360_F_314895284_4Fc8f6bMMtls1iG5vCClOQhYyEzM4xky.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dimmed Overlay */}
      <div className="absolute inset-0 bg-black opacity-85"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-2xl font-bold">About Fitality</h3>
            <p className="mt-4 text-gray-300">
              Fitality is your ultimate fitness destination. We offer a
              wide range of state-of-the-art equipment, expert trainers, and a
              variety of classes to help you achieve your fitness goals.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-2xl font-bold">SITEMAP</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="/"
                  className="hover:underline text-yellow-300 font-bold"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/trainers"
                  className="hover:underline text-yellow-300 font-bold"
                >
                  Trainers
                </a>
              </li>
              <li>
                <a
                  href="/rates"
                  className="hover:underline text-yellow-300 font-bold"
                >
                  Rates
                </a>
              </li>
              <li>
                <a
                  href="/supplements"
                  className="hover:underline text-yellow-300 font-bold"
                >
                  Supplements
                </a>
              </li>
              <li>
                <a
                  href="/aboutus"
                  className="hover:underline text-yellow-300 font-bold"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:underline text-yellow-300 font-bold"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-2xl font-bold">Contact Us</h3>
            <p className="mt-4 text-gray-300">
              123 Fitness Street,
              <br />
              Fitness City
              <br />
              Phone: +91 1234567890
              <br />
              Email: info@fitality.com
            </p>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-2xl font-bold">Follow Us</h3>
            <div className="mt-4 space-x-4">
              <a
                href="https://www.facebook.com"
                className="text-gray-400 hover:text-yellow-300"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com"
                className="text-gray-400 hover:text-yellow-300"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.twitter.com"
                className="text-gray-400 hover:text-yellow-300"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                className="text-gray-400 hover:text-yellow-300"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-8 border-t border-gray-700 pt-8 text-center md:text-left">
          <h3 className="text-2xl font-bold">Subscribe to Our Newsletter</h3>
          <p className="mt-4 text-gray-300">
            Stay updated with our latest news and promotions.
          </p>
          <form className="mt-4 flex justify-center md:justify-start">
            <div className="relative w-full max-w-xs">
              <input
                type="email"
                className="w-full text-gray-700 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-400"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                onClick={handleSubscribeClick}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-md"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Popup Modal */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                onClick={handleClosePopup}
                aria-label="Close popup"
              >
                &times;
              </button>
              <h2 className="text-xl font-bold text-center mb-4">
                Oops! Seems like you are testing our website
              </h2>
              <p className="text-gray-700 text-center">
                We appreciate your interest, but our subscription feature is not
                active yet. Stay tuned for updates!
              </p>
              <button
                className="bg-yellow-400 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-full mt-6 mx-auto block"
                onClick={handleClosePopup}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Fitality. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
