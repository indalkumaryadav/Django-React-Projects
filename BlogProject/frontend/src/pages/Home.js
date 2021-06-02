import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import BlogCard from "../components/blog/BlogCard";
import NavBar from "../components/header/NavBar";
import Footer from "../components/Footer";

const Home = () => {
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
    {
      title: "indal kumar yadav",
    },
    {
      title:
        "indal kumar yadav  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam veritatis labore a perferendis ratione voluptate beatae cupiditate. Doloribus atque  indal kumar yadav  Lorem, ipsum ",
    },
    {
      title: "indal kumar yadav",
    },
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
    {
      title:
        "indal kumar yadav  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam veritatis labore a perferendis ratione voluptate beatae cupiditate. Doloribus atque  indal kumar yadav  Lorem, ipsum ",
    },
    {
      title: "indal kumar yadav",
    },
    {
      title: "indal kumar yadav",
    },
    {
      title: "indal kumar yadav",
    },
    {
      title: "indal kumar yadav",
    },
    {
      title: "indal kumar yadav",
    },
    {
      title: "indal kumar yadav",
    },
    {
      title: "indal kumar yadav",
    },
  ];
  return (
    <>
      <NavBar />
      <Container>
        <Grid container spacing={3}>
          {data.map((item, i) => {
            return (
              <Grid key={i} item md={4} xs={12}>
                <BlogCard postTitle={item.title} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
