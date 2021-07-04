import React from "react";
import ChatList from "./ChatList";
import ChatContent from "./ChatContent";
import UserProfile from "../user/UserProfile";
import "./chat_body.css";

const ChatBody = () => {
  return (
    <div className="chat__body">
      <ChatList />
      <ChatContent />
      <UserProfile />
    </div>
  );
};

export default ChatBody;
