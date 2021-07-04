import React from "react";
import "./home.css";
import Nav from "../../components/nav/Nav";
import ChatBody from "../../components/chat/ChatBody";

const Home = () => {
  return (
    <div className="chatContainer">
      <ChatBody />
    </div>
  );
};

export default Home;
