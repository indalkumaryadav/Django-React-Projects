import React from "react";
import { Avatar, Container } from "@material-ui/core";
import "./chat_item.css";

const ChatItem = () => {
  const data = [
    { name: "indal" },
    { name: "indal" },
    { name: "indal" },
    { name: "indal" },
    { name: "indal" },
    { name: "indal" },
    { name: "indal" },
    { name: "indal" },
    { name: "indal" },
    { name: "indal" },
    { name: "indal" },
    { name: "indal" },
    { name: "indal" },
    { name: "indal" },
    { name: "indal" },
    { name: "indal" },
    { name: "indal" },
    { name: "indal" },
    { name: "indal" },
    { name: "indal" },
    { name: "indal" },
    { name: "indal" },
    { name: "indal" },
    { name: "indal" },
    { name: "indal" },
    { name: "indal" },
    { name: "indal" },
    { name: "indal" },
    { name: "indal" },
    { name: "indal" },
  ];
  return (
    <>
      {data.map((item) => (
        <div className="chat__item" style={{ animationDelay: `0.8s` }}>
          <Container
            style={{
              display: "flex",
              marginleft: 0,
              marginRight: 0,
              marginTop: 40,
              marginBottom: 40,
              position: "relative",
            }}
          >
            <div
              className="sender_msg"
              style={{
                position: "absolute",
                left: 0,
                padding: 10,
                backgroundColor: "green",
                borderRadius: 8,
                color: "white",
                borderBottomLeftRadius: 0,
              }}
            >
              Lorem ipsum
            </div>
            <div
              className="receiver_msg"
              style={{
                position: "absolute",
                right: 0,
                top: 50,
                backgroundColor: "red",
                padding: 10,
                borderRadius: 8,
                color: "white",
                borderBottomRightRadius: 0,
              }}
            >
              Lorem ipsum dolor sit amet
            </div>
          </Container>
        </div>
      ))}
    </>
  );
};

export default ChatItem;
