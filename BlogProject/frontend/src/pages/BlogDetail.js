import { useState, useEffect } from "react";
import {
  CardMedia,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { useHistory, useParams, Link } from "react-router-dom";
import NavBar from "../components/header/NavBar";
import User from "../components/user/User";
import Comment from "../components/comment/Comment";
import Footer from "../components/Footer";
import AddComment from "../components/comment/AddComment";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePostData } from "../redux/actions/postAction";
import Heart from "react-animated-heart";
import axios from "axios";

const BlogDetail = () => {
  const { username, id } = useParams();
  const [isClick, setClick] = useState(false);
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.post.postData);
  const history = useHistory();
  useEffect(() => {
    dispatch(getSinglePostData(id));
    if (isClick) {
      axios
        .post(
          "http://127.0.0.1:8000/api/blog/like/",
          {
            id: postData?.id,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [isClick]);

  return (
    <>
      <NavBar />
      <Container>
        <Grid container>
          <Grid item md={1} xs={12} align="center">
            <div
              style={{
                marginTop: 10,
              }}
            >
              {localStorage.getItem("token") ? (
                <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
              ) : (
                <Heart onClick={() => history.push("/login")} />
              )}

              <Typography>{postData?.like?.length || 0}</Typography>
            </div>
          </Grid>
          <Grid item md={8} xs={12}>
            <Paper
              style={{
                marginTop: 10,
                marginRight: 10,
                marginLeft: 10,
                paddingBottom: 20,
              }}
            >
              <CardMedia
                image={postData?.image}
                title="Paella dish"
                style={{
                  height: 0,
                  paddingTop: "56.25%", // 16:9
                }}
              />
              <Container style={{ marginTop: 10, paddingBottom: 20 }}>
                <Typography variant="h5" style={{ fontWeight: "bold" }}>
                  {postData?.title}
                </Typography>
                <div
                  dangerouslySetInnerHTML={{ __html: postData?.content }}
                ></div>
                {/*  */}
              </Container>
              <Divider />
              <Container>
                <Typography
                  variant="h5"
                  style={{
                    fontWeight: "bold",
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                >
                  Discussion (10)
                </Typography>
                <AddComment postId={postData?.id} />
                {postData?.comment?.map((item, i) => {
                  return (
                    <Comment
                      key={i}
                      username={item?.commented_by?.username}
                      email={item?.commented_by?.email}
                      content={item?.content}
                      userImage={item?.profile?.user_image}
                    />
                  );
                })}
              </Container>
            </Paper>
          </Grid>
          <Grid item md={3} xs={12}>
            <User
              email={postData?.user?.email}
              username={username}
              userImage={postData?.profile?.user_image}
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default BlogDetail;
