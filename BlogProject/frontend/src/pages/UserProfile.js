import {
  Avatar,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import NavBar from "../components/header/NavBar";
import { useHistory, useParams } from "react-router-dom";
import CakeIcon from "@material-ui/icons/Cake";
import BlogCard from "../components/blog/BlogCard";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { getUserData, getProfileData } from "../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { loadPost } from "../redux/actions/postAction";

const UserProfile = () => {
  const history = useHistory();
  const [selectedTab, setSelectedTab] = useState(0);
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  const { username } = useParams();
  const userData = useSelector((state) => state.user.userData);
  const profileData = useSelector((state) => state.user.profileData);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  console.log("userData", username);
  console.log("profileData", profileData?.username);
  useEffect(() => {
    dispatch(getUserData(username));
    dispatch(getProfileData());
    dispatch(loadPost());
  }, []);
  return (
    <>
      <NavBar />
      <div style={{ height: 150, backgroundColor: "black" }}></div>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "-60px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "-60px",
          }}
        >
          <IconButton>
            <Avatar
              src={userData?.profile && userData?.profile[0]?.user_image}
              style={{ height: 120, width: 120 }}
            >
              I
            </Avatar>
          </IconButton>
        </div>
        <Paper
          style={{ width: 1000, marginTop: "-50px", paddingBottom: 10 }}
          elevation={10}
        >
          <Container
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            {/* Edit Profile Button */}

            {localStorage.getItem("token") &&
            username === profileData?.username ? (
              <Button
                style={{
                  width: 150,
                  height: 40,
                  backgroundColor: "#323ebe",
                  color: "white",
                  textTransform: "capitalize",
                  marginTop: 10,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
                onClick={() => {
                  history.push("/editprofile");
                }}
              >
                Edit Profile
              </Button>
            ) : (
              <Button
                style={{
                  width: 150,
                  height: 40,
                  backgroundColor: "#323ebe",
                  color: "white",
                  textTransform: "capitalize",
                  marginTop: 10,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
                onClick={() => {
                  history.push("/username/editprofile");
                }}
              >
                Follow
              </Button>
            )}
          </Container>

          <Container>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography style={{ fontSize: 30, fontWeight: "bold" }}>
                {username}
              </Typography>
              <Typography style={{ marginTop: 10 }}>
                404 bio not found
              </Typography>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: 10,
                }}
              >
                <CakeIcon />
                <Typography style={{ marginLeft: 10 }}>
                  {userData?.profile && userData?.profile[0]?.user?.date_joined}
                </Typography>
              </div>
            </div>
          </Container>
        </Paper>

        <Container
          style={{
            marginTop: 10,
            width: 1050,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <AppBar
            position="static"
            elevation={1}
            style={{ backgroundColor: "white" }}
          >
            <Tabs
              value={selectedTab}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab
                label="Posts"
                style={{
                  color: "black",
                  textTransform: "capitalize",
                  fontSize: 16,
                  fontWeight: "600",
                }}
              />
            </Tabs>
          </AppBar>
          {selectedTab === 0 && (
            <Grid container>
              {userData?.post?.map((item, i) => {
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
          )}
        </Container>
      </Container>

      <Footer />
    </>
  );
};

export default UserProfile;
