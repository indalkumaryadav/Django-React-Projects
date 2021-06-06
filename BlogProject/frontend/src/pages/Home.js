import { Button, Container, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import BlogCard from "../components/blog/BlogCard";
import NavBar from "../components/header/NavBar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { loadPost } from "../redux/actions/postAction";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getProfileData, getUserData } from "../redux/actions/userAction";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const user = useSelector((state) => state.user.userData);
  const allPost = post?.post?.results;
  useEffect(() => {
    dispatch(loadPost());
    dispatch(getUserData());
    dispatch(getProfileData());
  }, []);
  return (
    <>
      <NavBar />
      <Container>
        {allPost && (
          <InfiniteScroll
            style={{ marginTop: 50 }}
            dataLength={allPost.length}
            next={() => {
              // setPage()
            }}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            {allPost?.map((item, i) => {
              return (
                <Grid key={i} item md={4} xs={12}>
                  <BlogCard
                    postId={item?.id}
                    username={item?.user?.username}
                    userId={item?.user?.id}
                    title={item?.title}
                    created_at={item?.created_at}
                    email={item?.user?.email}
                    image={item?.image}
                    userImage={item?.profile?.user_image}
                  />
                </Grid>
              );
            })}
          </InfiniteScroll>
        )}

        {/* <Grid container spacing={4}></Grid> */}
        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
            marginBottom: 30,
          }}
        >
          <Button
            style={{
              width: 200,
              backgroundColor: "#1da1f2",
              color: "white",
              textTransform: "inherit",
              fontSize: 16,
            }}
            onClick={loadMore}
          >
            Load more
          </Button>
        </div> */}
      </Container>
      <Footer />
    </>
  );
};

export default Home;
