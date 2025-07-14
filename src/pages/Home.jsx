import React, { useState } from "react";
import { useRef } from "react";
import ChatModal from "../components/ChatModal"; // Adjust path if different
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const chatRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [showChat, setShowChat] = useState(false);

  const appendMessage = (sender, text) => {
    setMessages((prev) => [...prev, { sender, text }]);
  };

  const sendMessage = () => {
    if (!userInput.trim()) return;
    appendMessage("user", userInput);
    setUserInput("");

    setTimeout(() => {
      appendMessage(
        "bot",
        "Thanks for your message! Our stylist is picking outfits for you 👗"
      );
    }, 800);
  };

  return (
    <div>
      <Navbar />

      {/* HERO SECTION */}
      <section className="text-center p-10 bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800">
          Hey 👋 I'm{" "}
          <span className="italic font-extrabold text-pink-600">
            StyleSense
          </span>
          <br /> Your stylist Friend
        </h1>
        <div className="mt-4 text-lg text-gray-600">
          <span id="animated-text">Ask for fashion suggestions</span>
        </div>
      </section>

      {/* IMAGE CAROUSEL */}
      <section className="overflow-x-auto whitespace-nowrap py-4">
        <div className="inline-flex space-x-4">
          {[
            "top",
            "dress",
            "corsets",
            "boots",
            "saree",
            "sandals",
            "womenjeans",
            "necklace",
            "menshirts",
            "jacketsforboys",
            "mentshirts",
          ].map((item, index) => (
            <img
              key={index}
              src={`/images/${item}.avif`}
              className="w-48 h-48 rounded-lg shadow-md object-cover inline-block"
              alt={item}
            />
          ))}
        </div>
      </section>

      {/* ANALYSIS SECTION */}
      <section className="text-center p-10">
        <h2 className="text-2xl font-bold text-gray-800">
          AI‑Powered Fashion Advice, Instantly
        </h2>
        <p className="text-gray-600 mb-4">
          Upload a photo or click one, and our AI will detect your body shape,
          face shape, and skin tone to suggest perfect outfits!
        </p>
        <div className="flex flex-col items-center space-y-3">
          <Link to="/fitcheck">
            <button className="bg-gray-800 text-white px-5 py-2 rounded-full hover:bg-gray-900 transition">
              Start Fit Check
            </button>
          </Link>
        </div>
        <div className="mt-3">
          <Link
            to="/chat"
            className="bg-pink-500 text-white font-bold px-5 py-3 rounded-lg hover:bg-pink-600 transition"
          >
            Need Help? Chat with StyleSense AI
          </Link>
          {showChat && <ChatModal onClose={() => setShowChat(false)} />}
        </div>
      </section>

      {/* CHATBOT SECTION */}
      <section id="chatbot" className="mt-10" ref={chatRef}>
        <h2 className="text-center text-2xl font-bold mb-4">
          👗 Talk to Your StyleSense Assistant
        </h2>
        <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-5">
          <div className="max-h-64 overflow-y-auto mb-4 space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg max-w-[75%] ${
                  msg.sender === "user"
                    ? "bg-pink-100 self-end ml-auto"
                    : "bg-gray-100 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              type="text"
              placeholder="Ask me for style advice..."
              className="flex-grow px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button
              onClick={sendMessage}
              className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition"
            >
              Send
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
