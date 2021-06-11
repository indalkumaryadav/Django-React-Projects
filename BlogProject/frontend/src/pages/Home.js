import { Button, Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import BlogCard from "../components/blog/BlogCard";
import NavBar from "../components/header/NavBar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { loadPost } from "../redux/actions/postAction";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getProfileData, getUserData } from "../redux/actions/userAction";
import useLoadMore from "../hooks/loadMore";

const Home = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const user = useSelector((state) => state.user.userData);
  const allPost = post?.post?.results;
  let [pageNum, setPageNum] = useState(1);

  const handleLoadMore = () => {
    setPageNum(pageNum++);
  };
  const { data } = useLoadMore(pageNum);
  console.log(data);

  useEffect(() => {
    dispatch(loadPost());
    dispatch(getProfileData());
  }, []);

  const GridLayout = () => {
    return (
      <Grid container spacing={4}>
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
        {data.map((item, i) => {
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
      </Grid>
    );
  };
  return (
    <>
      <NavBar />
      <Container>
        <GridLayout />

        <div
          style={{
            marginTop: 40,
            marginBottom: 40,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            style={{ backgroundColor: "red", color: "white" }}
            onClick={handleLoadMore}
          >
            Load More
          </Button>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
