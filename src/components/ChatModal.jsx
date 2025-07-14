import React from "react";
import ChatGrid from "./ChatGrid";
import "./ChatModal.css";

const ChatModal = ({ onClose }) => {
  return (
    <div className="chat-modal-overlay" onClick={onClose}>
      <div className="chat-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>
        <ChatGrid />
      </div>
    </div>
  );
};

export default ChatModal;
