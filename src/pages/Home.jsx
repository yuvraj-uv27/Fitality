import React from "react";
import Menu from "../components/Menu";
import TrainersPage from "./Trainers";
import Rates from "./Rates";
import videoSrc from "/public/Video/videoplayback.mp4"; // Update with your local video path

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen text-center">
      <Menu />

      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={videoSrc} // Updated video path
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-70">
          <h1 className="text-5xl font-bold text-white leading-none font-sans">
            <span className="text-transparent text-stroke-white text-stroke-1 font-bold text-8xl block font-sans">
              Keep Your Body
            </span>
            <span className="text-yellow-500 font-sans text-stroke-black text-stroke-1 font-extrabold text-7xl block mt-2">
              FIT & STRONG
            </span>
          </h1>
          <p className="text-white mt-4 text-2xl font-sans">
            Your fitness journey starts here
          </p>
        </div>
      </div>

      {/* Trainers Section */}
      <TrainersPage />

      {/* Rates Section */}
      <Rates />
    </div>
  );
};

export default Home;
