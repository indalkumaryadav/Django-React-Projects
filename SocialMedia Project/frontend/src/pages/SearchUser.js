import React, { useEffect } from 'react';
import NavBar from '../component/header/NavBar';
import { MainDiv, LeftDiv, RightDiv, CenterDiv, PostContainer } from './home/style';
import LeftSideBar from '../component/sidebar/LeftSideBar';
import RightSidebar from '../component/sidebar/RightSideBar';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser, loadProfile } from '../redux/actions/userAction';
import { loadPost } from '../redux/actions/postAction';
import { getUserStory } from '../redux/actions/storyAction';
import { getLikeData } from '../redux/actions/likeAction';
import { useParams } from 'react-router-dom';
import UserCard from '../component/user/UserCard';
import { searchUserData } from '.././redux/actions/searchAction';
import { getUserFollowing } from '.././redux/actions/followingAction';

const SearchUser = () => {
  const dispatch = useDispatch();
  const { q } = useParams();
  const currentUser = useSelector((state) => state.user.profile);
  const searchUser = useSelector((state) => state.search.data);
  console.log(searchUser);
  useEffect(() => {
    dispatch(loadUser());
    dispatch(loadProfile());
    dispatch(loadPost());
    dispatch(getUserStory());
    dispatch(getLikeData());
    dispatch(searchUserData(q));
  }, []);

  return (
    <>
      <MainDiv>
        <LeftDiv>
          <LeftSideBar />
        </LeftDiv>
        <CenterDiv>
          <NavBar />
          <PostContainer>
            <div
              style={{
                marginTop: 20,
                marginBottom: 50,
              }}
            >
              <h1>Search User :- &nbsp; &nbsp;{`" ${q} "`}</h1>
              <div
                style={{
                  marginTop: 40,
                }}
              >
                {searchUser.length ? (
                  searchUser.map((user, i) => {
                    return (
                      <UserCard
                        userId={user?.id}
                        key={i}
                        email={user?.email}
                        username={user?.username}
                        image={user?.profile?.user_image}
                      />
                    );
                  })
                ) : (
                  <h3>No User</h3>
                )}
              </div>
            </div>
          </PostContainer>
        </CenterDiv>
        <RightDiv>
          <RightSidebar />
        </RightDiv>
      </MainDiv>
    </>
  );
};

export default SearchUser;
