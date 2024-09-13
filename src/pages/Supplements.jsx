import React, { useState } from "react";
import Menu from "../components/Menu";
import HomeIcon from "../components/HomeIcon";

const supplements = [
  {
    id: 1,
    name: "Whey Protein",
    description: "High-quality protein powder for muscle growth and recovery.",
    price: "$29.99",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrPG6BKwZHnvhoNt2aA_vdS7cxKeGLuDNKbw&s",
  },
  {
    id: 2,
    name: "Creatine Monohydrate",
    description:
      "Boosts strength and performance during high-intensity workouts.",
    price: "$19.99",
    image:
      "https://e7.pngegg.com/pngimages/642/363/png-clipart-creatine-brand-nutrition-sport-others-sport-nutrition-thumbnail.png",
  },
  {
    id: 3,
    name: "BCAA",
    description:
      "Branched-chain amino acids for muscle repair and reduced soreness.",
    price: "$24.99",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6jbOXFZy_Qy6j47XO1RQdeF29EHlI45inA&s",
  },
  {
    id: 4,
    name: "Pre-Workout",
    description: "Increase energy and focus for intense training sessions.",
    price: "$34.99",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTweL0n5N18BIiBUfjePwVlzl8KaMjT_JdXHQ&s",
  },
  {
    id: 5,
    name: "Omega-3 Fish Oil",
    description:
      "Essential fatty acids that support heart health and reduce inflammation.",
    price: "$15.99",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz0wbk6pfS5MoVJpUdtH-P7EdrFum-Hc9FYw&s",
  },
  {
    id: 6,
    name: "Multivitamin",
    description: "Complete multivitamin for overall health and wellness.",
    price: "$12.99",
    image:
      "https://w7.pngwing.com/pngs/642/284/png-transparent-dietary-supplement-multivitamin-service-multi-vitamin-service-dietary-supplement-diet-thumbnail.png",
  },
];

const Supplements = () => {
  const [selectedSupplement, setSelectedSupplement] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (supplement) => {
    setSelectedSupplement(supplement);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSupplement(null);
  };

  return (
    <div className="bg-black min-h-screen py-12 pt-20 px-4">
      <HomeIcon />
      <Menu />
      <h1 className="text-4xl font-bold text-center text-yellow-300 mb-12">
        OUR SUPPLIMENTS
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {supplements.map((supplement) => (
          <div
            key={supplement.id}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105"
            onClick={() => handleCardClick(supplement)}
            role="button"
            aria-label={`View details for ${supplement.name}`}
          >
            <img
              src={supplement.image}
              alt={supplement.name}
              className="w-full h-48 object-contain rounded-lg"
            />
            <h2 className="text-2xl font-bold text-gray-800 mt-4">
              {supplement.name}
            </h2>
            <p className="text-gray-600 mt-2 text-center">
              {supplement.description}
            </p>
            <p className="text-xl font-semibold text-blue-600 mt-4">
              {supplement.price}
            </p>
            <button
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-6 hover:bg-blue-500 transition-transform transform hover:translate-y-1"
              aria-label={`Add ${supplement.name} to cart`}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && selectedSupplement && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2
              id="modal-title"
              className="text-2xl font-bold mb-4"
            >
              {selectedSupplement.name}
            </h2>
            <p className="text-gray-700 mb-4">
              {selectedSupplement.description}
            </p>
            <p className="text-xl font-semibold text-blue-600 mb-4">
              {selectedSupplement.price}
            </p>
            <p className="text-red-600 mb-4">
              Currently out of stock! for online sale.
            </p>
            {/* Add more details like ingredients, usage instructions, etc. */}
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
              onClick={closeModal}
              aria-label="Close details"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Supplements;
