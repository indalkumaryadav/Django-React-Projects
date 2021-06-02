import {
  Card,
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

const BlogDetail = ({ postTitle }) => {
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
                image="https://source.unsplash.com/random"
                title="Paella dish"
                style={{
                  height: 0,
                  paddingTop: "56.25%", // 16:9
                }}
              />
              <Container style={{ marginTop: 10, paddingBottom: 20 }}>
                <Typography variant="h5" style={{ fontWeight: "bold" }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugiat aliquid ea, perferendis delectus quam explicabo
                  placeat, ut laudantium ducimus minima, expedita eligendi!
                  Autem iure voluptatibus modi earum veritatis ducimus minima.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus nobis voluptatum quam adipisci, est autem amet
                  similique ipsam animi expedita consequatur minus et
                  blanditiis. Molestiae architecto dicta iste sit sed? Lorem
                  ipsum dolor sit amet consectetur, adipisicing elit. Corporis
                  sint quidem eum veniam, sit illum excepturi. Molestiae,
                  tempora sequi fugiat, quas eius odio, atque unde et esse quam
                  incidunt dolorum! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Dolorem deleniti tenetur, excepturi impedit
                  totam exercitationem officiis voluptatem eos nulla magnam qui
                  recusandae iure natus \n soluta. Voluptatibus quas illum
                  veniam praesentium! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Impedit natus veniam neque vitae tempora,
                  quidem cumque dicta accusamus laboriosam quaerat deserunt
                  eaque, voluptates voluptatem est accusantium minima
                  consectetur aspernatur repellat!
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
            <User />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default BlogDetail;
