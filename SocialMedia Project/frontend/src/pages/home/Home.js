import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MainDiv,
  LeftDiv,
  RightDiv,
  CenterDiv,
  PostContainer,
  StoryContainer,
} from "./style";
import Post from "../../component/post/Post";
import NavBar from "../../component/header/NavBar";
import LeftSideBar from "../../component/sidebar/LeftSideBar";
import RightSidebar from "../../component/sidebar/RightSideBar";
import Story from "../../component/story/Story";
import AddStory from "../../component/story/AddStory";
import Carousel from "react-elastic-carousel";
import { loadUser, loadProfile } from "../../redux/actions/userAction";
import { loadPost } from "../../redux/actions/postAction";
import Menu from "../../component/Menu";
import { getUserStory } from "../../redux/actions/storyAction";
import { getLikeData } from "../../redux/actions/likeAction";
import { Helmet } from "react-helmet";

const Home = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();
  const userPost = useSelector((state) => state.post.post);
  const userStory = useSelector((state) => state.story.story);
  const currentUserPost = userPost?.current_user_post;
  const followingUserPost = userPost?.following_post;
  const currentUserProfile = useSelector((state) => state.user.profile);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  useEffect(() => {
    dispatch(loadUser());
    dispatch(loadProfile());
    dispatch(loadPost());
    dispatch(getUserStory());
    dispatch(getLikeData());
  }, []);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <MainDiv>
        <LeftDiv>
          <LeftSideBar setOpenMenu={setOpenMenu} />
        </LeftDiv>
        <CenterDiv>
          <NavBar />
          {/* story */}
          <StoryContainer>
            <AddStory />
            <div
              style={{
                width: 520,
                display: "flex",
              }}
            >
              {userStory.length ? (
                <Carousel itemsToShow={3} pagination={false}>
                  {userStory.map((story, i) => {
                    return (
                      <Story
                        key={i}
                        image={story.image}
                        email={story.user.email}
                      />
                    );
                  })}
                </Carousel>
              ) : (
                ""
              )}
            </div>
          </StoryContainer>
          {/* story */}
          <PostContainer>
            {/* following user post */}
            {followingUserPost?.map((post, i) => {
              return post.map((item, i) => {
                return (
                  <Post
                    key={i}
                    liked_by={item?.like}
                    id={item?.id}
                    postLike={item?.like}
                    postComment={item?.comment}
                    image={item?.image}
                    title={item?.title}
                    userName={item?.user?.username}
                    userImage={item?.profile?.user_image}
                  />
                );
              });
            })}
            {/* current user post */}
            {userPost &&
              currentUserPost?.map((post, i) => {
                return (
                  <Post
                    userId={post?.user?.id}
                    key={i}
                    id={post?.id}
                    postLike={post?.like}
                    liked_by={post?.like}
                    postComment={post?.comment}
                    image={post?.image}
                    title={post?.title}
                    userImage={currentUserProfile?.profile?.user_image}
                    userName={currentUserProfile?.email}
                  />
                );
              })}
          </PostContainer>
        </CenterDiv>
        <RightDiv>
          <RightSidebar handleMenu={handleMenu} />
        </RightDiv>
      </MainDiv>
      {openMenu && <Menu setOpenMenu={setOpenMenu} />}
    </>
  );
};

export default Home;
