import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { name: "HOME", href: "/" },
    { name: "TRAINERS", href: "/trainers" },
    { name: "RATES", href: "/rates" },
    { name: "SUPPLEMENTS", href: "/supplements" },
    { name: "ABOUT US", href: "/aboutus" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      {isVisible && (
        <div className="fixed top-2 right-1 z-50">
          <button
            className="text-white text-3xl p-2 bg-black rounded-full hover:bg-gray-800"
            onClick={toggleMenu}
          >
            {isOpen ? <IoMdClose /> : <FaBars />}
          </button>
        </div>
      )}

      <div
        className={`fixed inset-0 bg-black bg-opacity-90 z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col items-center space-y-4 text-5xl font-extrabold text-white">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-blue-500"
                onClick={toggleMenu}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Menu;
