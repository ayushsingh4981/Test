import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="bg-white text-gray-800 font-[Poppins]">
      <Navbar />

      {/* HERO SECTION */}
      <section className="text-center py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          About <span className="text-pink-600">StyleSense AI</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto px-4">
          Your personal AI stylist that understands your unique style and helps you look your best every day.
        </p>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How StyleSense AI Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-xl font-semibold mb-3">Upload Your Photo</h3>
              <p className="text-gray-600">Simply upload a photo and let our AI analyze your body shape, face shape, and skin tone.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
              <p className="text-gray-600">Our advanced AI processes your features and style preferences to create personalized recommendations.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-3">Get Styled</h3>
              <p className="text-gray-600">Receive curated outfit suggestions that complement your unique features and style.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At StyleSense AI, we believe everyone deserves to feel confident and stylish. Our mission is to democratize fashion advice by making personalized styling accessible to everyone through the power of artificial intelligence. We're here to help you discover your unique style and express yourself with confidence.
          </p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Style?</h2>
        <div className="space-x-4">
          <Link to="/fitcheck">
            <button className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition">
              Start Your Style Journey
            </button>
          </Link>
          <Link to="/contact">
            <button className="border-2 border-pink-500 text-pink-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-500 hover:text-white transition">
              Contact Us
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;