import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useSuggestion from "../context/userContext.jsx";

const StyleResults = () => {
  const { suggestions } = useSuggestion();

  return (
    <div className="font-[Poppins] bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-grow px-6 py-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-pink-600 mb-4">
            ✨ Your AI-Based Outfit Suggestions
          </h2>
          <p className="text-gray-600 text-lg">
            Based on your photo analysis, here are personalized outfit
            recommendations just for you!
          </p>
        </div>

        {/* Loop over all models */}
        <div className="max-w-6xl mx-auto space-y-10">
          {Object.entries(suggestions).map(([modelName, modelSuggestions]) => (
            <div key={modelName}>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 capitalize">
                {modelName} Suggestions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {modelSuggestions.map((suggestion) =>
                  suggestion.dresses?.map((dress) => (
                    <div
                      key={dress.kit_number}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                      <img
                        src={dress.url}
                        alt={dress.product_name || "Outfit"}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          {dress.product_name || "Unnamed Product"}
                        </h3>
                        <p className="text-gray-600 mb-2">
                          {dress.description}
                        </p>
                        <p className="text-gray-500 mb-2">Fit: {dress.fit}</p>
                        {dress.price_usd && (
                          <p className="text-pink-600 font-bold mb-2">
                            Price: ${dress.price_usd} USD
                          </p>
                        )}
                        {dress.price_inr && (
                          <p className="text-pink-600 font-bold mb-2">
                            Price: ₹{dress.price_inr} INR
                          </p>
                        )}
                        <p className="text-green-600 font-semibold">
                          {dress.availability}
                        </p>
                        <button className="w-full bg-pink-500 text-white py-2 mt-3 rounded-lg hover:bg-pink-600 transition">
                          Save to Wishlist
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="text-center mt-10 space-x-4">
          <Link to="/fitcheck">
            <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition">
              Try Another Look
            </button>
          </Link>
          <Link to="/profile">
            <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition">
              View My Profile
            </button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StyleResults;
