import React, { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";

const HomeIcon = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 45);
    };

    // Debounced scroll event listener
    const handleScrollDebounced = () => {
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(handleScroll, 30);
    };

    window.addEventListener("scroll", handleScrollDebounced);

    return () => {
      window.removeEventListener("scroll", handleScrollDebounced);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="absolute top-2 left-4 text-5xl font-bold text-white z-50">
      <a href="/" className="text-white font-bold text-2xl hover:text-blue-500">
        FITALITY
      </a>
    </div>
  );
};

export default HomeIcon;
