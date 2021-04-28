import React, { useState } from "react";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

const Comment = () => {
  const [state, setState] = useState(true);
  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
    if (value === "") {
      setState(true);
    } else {
      setState(false);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <IconButton>
        <InsertEmoticonIcon />
      </IconButton>
      <input
        style={{
          height: 40,
          outline: "none",
          borderRadius: 25,
          padding: 10,
          fontSize: 16,
          flexGrow: 1,
        }}
        onChange={handleChange}
      />
      <IconButton disabled={state}>
        <SendIcon />
      </IconButton>
    </div>
  );
};

export default Comment;
