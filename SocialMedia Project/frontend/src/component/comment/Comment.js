import React, { useState } from "react";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addPostComment } from "../../redux/actions/commentAction";
import { loadPost } from "../../redux/actions/postAction";

const Comment = ({ setComment, id }) => {
  const [state, setState] = useState(true);
  const [title, setTitle] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    setTitle(value);

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
      <IconButton
        disabled={state}
        onClick={() => {
          dispatch(addPostComment(id, title));
          dispatch(loadPost());
          setComment(false);
        }}
      >
        <SendIcon />
      </IconButton>
    </div>
  );
};

export default Comment;
