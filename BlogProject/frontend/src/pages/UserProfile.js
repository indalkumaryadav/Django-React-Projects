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
import { useHistory } from "react-router-dom";
import CakeIcon from "@material-ui/icons/Cake";
import BlogCard from "../components/blog/BlogCard";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useState } from "react";
import Footer from "../components/Footer";

const UserProfile = () => {
  const history = useHistory();
  const [selectedTab, setSelectedTab] = useState(0);
  const [state, setState] = useState(false);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const data = [
    {
      title:
        "indal kumar yadav  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam veritatis labore a perferendis ratione voluptate beatae cupiditate. Doloribus atque  indal kumar yadav  Lorem, ipsum ",
    },
    {
      title:
        "indal kumar yadav  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam veritatis labore a perferendis ratione voluptate beatae cupiditate. Doloribus atque  indal kumar yadav  Lorem, ipsum ",
    },
    {
      title:
        "indal kumar yadav  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam veritatis labore a perferendis ratione voluptate beatae cupiditate. Doloribus atque  indal kumar yadav  Lorem, ipsum ",
    },
  ];

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
            <Avatar style={{ height: 120, width: 120 }}>I</Avatar>
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
              Edit Profile
            </Button>
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
                Indal Kumar Yadav
              </Typography>
              <Typography style={{ marginTop: 10 }}>
                404 bio not found
              </Typography>
              {/*  */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: 10,
                }}
              >
                <CakeIcon />
                <Typography style={{ marginLeft: 10 }}>
                  Joined on May 31, 2021
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
              {data.map((item, i) => {
                return (
                  <Grid key={i} item md={4} xs={12}>
                    <BlogCard postTitle={item.title} />
                  </Grid>
                );
              })}
            </Grid>
          )}
          {selectedTab === 2 && (
            <Grid container spacing={3}>
              {data.map((item, i) => {
                return (
                  <Grid key={i} item md={4} xs={12}>
                    <BlogCard postTitle={item.title} />
                  </Grid>
                );
              })}
            </Grid>
          )}
          {selectedTab === 3 && (
            <Grid container spacing={3}>
              {data.map((item, i) => {
                return (
                  <Grid key={i} item md={4} xs={12}>
                    <BlogCard postTitle={item.title} />
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
