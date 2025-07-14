import React, { useEffect, useRef, useState } from "react";
import "./ChatGrid.css";

const questions = [
  { q: "What's your skin type?", options: ["🧍 😊 Normal", "🧍 😬 Sensitive"] },
  { q: "What's your local climate?", options: ["🧍 ☀️ Hot", "🧍 💧 Humid", "🧍 ❄️ Cold"] },
  { q: "How will you use the outfit?", options: ["🧍 🏋️ Gym", "🧍 🎉 Party", "🧍 🧍 Daily"] },
  { q: "Which fabric are you considering?", options: ["🧵 Cotton", "🧶 Wool", "👚 Polyester", "🧺 Modal", "✍️ Other"] }
];

const ChatGrid = () => {
  const [chat, setChat] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(-1); // 👈 Start from -1
  const [answers, setAnswers] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [customFabric, setCustomFabric] = useState("");

  const botSay = (msg) =>
    new Promise((resolve) => {
      setTimeout(() => {
        setChat((prev) => [...prev, { sender: "bot", text: msg }]);
        resolve();
      }, 800);
    });

  const userSay = (msg) => {
    setChat((prev) => [...prev, { sender: "user", text: msg }]);
  };

  const handleOptionClick = async (option) => {
    userSay(option);
    const answer = option.replace(/^.*? /, ""); // Remove emoji
    setAnswers((prev) => [...prev, answer]);

    if (questionIndex === 3 && answer === "Other") {
      setShowInput(true);
    } else {
      setQuestionIndex((prev) => prev + 1);
    }
  };

  const handleCustomSubmit = async () => {
    if (!customFabric.trim()) return;
    userSay(`🧵 ${customFabric}`);
    setAnswers((prev) => [...prev, customFabric]);
    setShowInput(false);
    setQuestionIndex((prev) => prev + 1);
  };

  const showSummary = async () => {
    const [skin, climate, purpose, fabric] = answers;
    let warning = "";

    if (
      fabric?.toLowerCase().includes("wool") &&
      skin === "Sensitive" &&
      climate?.toLowerCase().includes("hot")
    ) {
      warning = "⚠️ Risk: Wool can irritate sensitive skin and trap heat in hot climates.";
    }

    const suggestion = warning || `✅ Great! ${fabric} suits your preferences.`;

    await botSay(`📋 Summary of your inputs:\n• Skin: ${skin}\n• Climate: ${climate}\n• Use: ${purpose}\n• Fabric: ${fabric}`);
    await botSay(`${suggestion}\n🧵 Cotton or Modal are great all-weather options too.`);
  };

  const hasStarted = useRef(false); // 🛡️ Add this above all useEffects

useEffect(() => {
  if (hasStarted.current) return; // ✅ Guard against double run
  hasStarted.current = true;

  const startChat = async () => {
    await botSay("👋 Hey there! How’s your day going?");
    await botSay("🛍️ I’m your fashion stylist. Let’s style you up!");
    setQuestionIndex(0);
  };

  startChat();
}, []);

  useEffect(() => {
    const askQuestion = async () => {
      if (questionIndex >= 0 && questionIndex < questions.length) {
        await botSay(questions[questionIndex].q);
      } else if (questionIndex === questions.length && !showInput) {
        await botSay("🧠 Analyzing your inputs...");
        await showSummary();
      }
    };

    askQuestion();
  }, [questionIndex, showInput]);

  return (
    <div className="chat-fullscreen">
      <div className="chat-window">
        {chat.map((msg, i) => (
          <div
            key={i}
            className={`chat-bubble ${msg.sender === "bot" ? "bot-message" : "user-message"}`}
          >
            <span className="avatar">{msg.sender === "bot" ? "🤖" : "🧍"}</span>
            {msg.text}
          </div>
        ))}

        {questionIndex >= 0 &&
          questionIndex < questions.length &&
          !showInput && (
            <div className="options">
              {questions[questionIndex].options.map((opt, i) => (
                <button key={i} className="option-btn" onClick={() => handleOptionClick(opt)}>
                  {opt}
                </button>
              ))}
            </div>
          )}

        {showInput && (
          <div className="custom-input">
            <input
              type="text"
              placeholder="Type your fabric"
              value={customFabric}
              onChange={(e) => setCustomFabric(e.target.value)}
            />
            <button onClick={handleCustomSubmit}>Send</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatGrid;
