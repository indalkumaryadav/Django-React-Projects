import { Avatar, Button, IconButton, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { getProfileData } from "../../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePostData } from "../../redux/actions/postAction";

const AddComment = ({ postId }) => {
  const history = useHistory();
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileData());
    dispatch(getSinglePostData(101));
  }, [comment]);
  const handleComment = () => {
    axios
      .post("http://127.0.0.1:8000/api/blog/comment/", {
        comment,
        id: postId,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        width: "100%",
        marginTop: 20,
        marginBottom: 10,
      }}
    >
      <IconButton>
        <Avatar />
      </IconButton>
      <div style={{ flex: 1 }}>
        <TextField
          fullWidth
          multiline
          rows={3}
          variant="outlined"
          onChange={(e) => setComment(e.target.value)}
        />

        {localStorage.getItem("token") ? (
          <Button
            style={{
              marginTop: 10,
              marginLeft: 4,
              backgroundColor: "#323ebe",
              color: "white",
              textTransform: "capitalize",
            }}
            onClick={() => {
              handleComment();
            }}
          >
            Submit
          </Button>
        ) : (
          <Button
            style={{
              marginTop: 10,
              marginLeft: 4,
              backgroundColor: "#323ebe",
              color: "white",
              textTransform: "capitalize",
            }}
            onClick={() => {
              history.push("/login");
            }}
          >
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

export default AddComment;
