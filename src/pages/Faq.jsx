import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "🧠 How does the AI recommend outfits?",
      answer:
        "Our AI uses your uploaded inputs like body shape, face shape, and skin tone to suggest outfits that flatter your unique style. It analyzes thousands of fashion combinations to find what works best for you.",
    },
    {
      question: "📸 Can I upload any kind of photo?",
      answer:
        "Yes! Just make sure it's front-facing, well-lit, and full-body for best results. The clearer the photo, the more accurate our AI analysis will be.",
    },
    {
      question: "🛍 Are these real clothes?",
      answer:
        "No. These are AI-styled outfit ideas. You can use them for inspiration or styling reference when shopping for similar items.",
    },
    {
      question: "💰 Is this free?",
      answer: "Yes, StyleSense AI is completely free to use — forever. We believe everyone deserves access to great style advice.",
    },
    {
      question: "🔒 Is my data safe?",
      answer: "Absolutely! We take privacy seriously. Your photos and personal information are encrypted and never shared with third parties.",
    },
    {
      question: "📱 Can I use this on mobile?",
      answer: "Yes! StyleSense AI works perfectly on all devices - desktop, tablet, and mobile. You can even take photos directly with your phone camera.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-pink-600 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-lg">Everything you need to know about StyleSense AI</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-6 py-4 bg-white hover:bg-gray-50 focus:outline-none transition"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span className="text-2xl text-pink-500 font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4">Still have questions?</h3>
          <div className="space-x-4">
            <Link to="/contact">
              <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition">
                Contact Us
              </button>
            </Link>
            <Link to="/fitcheck">
              <button className="border-2 border-pink-500 text-pink-500 px-6 py-3 rounded-lg hover:bg-pink-500 hover:text-white transition">
                Try StyleSense AI
              </button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}