import React from "react";
import User from "../user/User";
import AddUser from "../user/AddUser";
import "./chat_list.css";
import Search from "../common/Search";
const ChatList = () => {
  return (
    <div className="chatList">
      <AddUser />
      <div style={{ height: "100%" }}>
        <div>
          <h2 style={{ fontWeight: "bold", marginLeft: 10 }}>Chats</h2>
          <Search />
        </div>
        <div className="userContainer">
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
        </div>
      </div>
    </div>
  );
};

export default ChatList;
