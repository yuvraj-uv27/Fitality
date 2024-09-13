import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Rates from "./pages/Rates";
import Supplements from "./pages/Supplements";
import Trainers from "./pages/Trainers";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Main content area */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rates" element={<Rates />} />
            <Route path="/supplements" element={<Supplements />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
