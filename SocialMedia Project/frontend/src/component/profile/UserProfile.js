import React, { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';
import { useSelector, useDispatch } from 'react-redux';
import PostCard from '../post/PostCard';
import { Grid } from '@material-ui/core';
import { getUserProfileById } from '../../redux/actions/userAction';

const UserProfile = ({ userId }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const userProfile = useSelector((state) => state.user.profileData);

  const currentUserPost = useSelector((state) => state.post.post.current_user_post);

  useEffect(() => {
    dispatch(getUserProfileById(userId));
  }, []);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ProfileCard
          bio={userProfile?.bio}
          fullName={userProfile?.full_name}
          userName={userProfile?.username}
          email={userProfile?.email}
          user_image={userProfile?.profile?.user_image}
          followers={userProfile?.follower?.length}
          following={userProfile?.following?.length}
          posts={userProfile?.post?.length}
        />
      </div>
      <Grid container spacing={2} style={{ marginTop: 10 }}>
        {userProfile?.post?.length ? (
          userProfile?.post?.map((item, i) => {
            return (
              <Grid key={i} item md={4}>
                <PostCard post={userProfile?.post} title={item?.title} image={item?.image} />
              </Grid>
            );
          })
        ) : (
          <div
            style={{
              marginTop: 30,
              display: 'flex',
              justifyContent: 'center',
              width: 700,
            }}
          >
            <h3>No Post yet</h3>
          </div>
        )}
      </Grid>
    </>
  );
};

export default UserProfile;
