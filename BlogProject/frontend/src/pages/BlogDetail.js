import {
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import NavBar from "../components/header/NavBar";
import User from "../components/user/User";
import Comment from "../components/comment/Comment";
import Footer from "../components/Footer";
import AddComment from "../components/comment/AddComment";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSinglePostData } from "../redux/actions/postAction";

const BlogDetail = () => {
  const { username, id } = useParams();
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.post.postData);
  console.log(postData);
  useEffect(() => {
    dispatch(getSinglePostData(id));
  }, []);

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
              <IconButton>
                <FavoriteBorderIcon />
              </IconButton>
              <Typography>20</Typography>
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
                <AddComment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
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
