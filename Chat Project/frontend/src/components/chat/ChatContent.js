import React from "react";
import "./chat_content.css";
import ChatItem from "./ChatItem";
import { Container, IconButton } from "@material-ui/core";
import Search from "../common/Search";
import SendIcon from "@material-ui/icons/Send";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import AttachFileIcon from "@material-ui/icons/AttachFile";

const ChatContent = () => {
  return (
    <div className="chatContent">
      <Container
        style={{
          overflow: "hidden",
          overflowY: "scroll",
          overflowX: "hidden",
          height: "88%",
        }}
      >
        <ChatItem />
      </Container>
      <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
        <IconButton>
          <EmojiEmotionsIcon />
        </IconButton>
        <IconButton>
          <AttachFileIcon />
        </IconButton>
        <Search style={{ flexGrow: 1 }} />
        <IconButton>
          <SendIcon style={{ color: "purple", fontSize: 28 }} />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatContent;
