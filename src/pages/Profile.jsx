import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Profile = () => {
  return (
    <div className="bg-gray-50 font-[Poppins] min-h-screen">
      <Navbar />

      {/* MAIN CONTAINER */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-10">
          👗 Your Style Profile
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {/* Personal Information */}
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="text-xl text-gray-700 font-semibold mb-4">
                👤 Personal Information
              </h4>
              <p className="mb-2">
                <span className="font-medium">Name:</span> Riya
              </p>
              <p className="mb-2">
                <span className="font-medium">Email:</span> riya@example.com
              </p>
              <p className="mb-2">
                <span className="font-medium">Location:</span> Delhi
              </p>
              <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition">
                Edit Profile
              </button>
            </div>

            {/* Style Preferences */}
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="text-xl text-gray-700 font-semibold mb-4">
                🎨 Style Preferences
              </h4>
              <div className="space-y-2">
                <p><span className="font-medium">Body Type:</span> Hourglass</p>
                <p><span className="font-medium">Skin Tone:</span> Wheatish</p>
                <p><span className="font-medium">Favorite Colors:</span> Pink, Blue, Black</p>
                <p><span className="font-medium">Style:</span> Casual Chic</p>
              </div>
            </div>

            {/* Wishlist */}
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="text-xl text-gray-700 font-semibold mb-4">
                ❤️ Wishlist
              </h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Floral White Top</li>
                <li>Boho Shirt</li>
                <li>Casual Summer Dress</li>
                <li>Denim Jacket</li>
              </ul>
              <Link to="/results">
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                  Browse More Styles
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {/* Profile Photo */}
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h4 className="text-xl text-gray-700 font-semibold mb-4">
                📷 Your Photo
              </h4>
              <div className="w-40 h-40 mx-auto rounded-full border-4 border-pink-300 shadow-md bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Upload Photo</span>
              </div>
              <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">
                Upload New Photo
              </button>
            </div>

            {/* Recent Recommendations */}
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="text-xl text-gray-700 font-semibold mb-4">
                ✨ Recent Recommendations
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/top.avif"
                  alt="Recent 1"
                  className="rounded-lg shadow h-24 w-full object-cover"
                />
                <img
                  src="/images/dress.avif"
                  alt="Recent 2"
                  className="rounded-lg shadow h-24 w-full object-cover"
                />
              </div>
              <Link to="/fitcheck">
                <button className="mt-4 w-full px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition">
                  Get New Recommendations
                </button>
              </Link>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="text-xl text-gray-700 font-semibold mb-4">
                🚀 Quick Actions
              </h4>
              <div className="space-y-3">
                <Link to="/fitcheck" className="block">
                  <button className="w-full text-left px-4 py-2 bg-pink-50 text-pink-600 rounded-lg hover:bg-pink-100 transition">
                    📸 New Style Analysis
                  </button>
                </Link>
                <Link to="/results" className="block">
                  <button className="w-full text-left px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition">
                    👗 Browse Outfits
                  </button>
                </Link>
                <Link to="/faq" className="block">
                  <button className="w-full text-left px-4 py-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition">
                    ❓ Help & FAQ
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;