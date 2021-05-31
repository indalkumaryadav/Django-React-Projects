import {
  Card,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import NavBar from "../components/header/NavBar";
import User from "../components/user/User";

const BlogDetail = () => {
  const { postTitle } = useParams();
  return (
    <>
      <NavBar />
      <Container>
        <Grid container>
          <Grid item md={8} xs={12}>
            <Paper style={{ marginTop: 10, marginRight: 10, marginLeft: 10 }}>
              <CardMedia
                image="https://source.unsplash.com/random"
                title="Paella dish"
                style={{
                  height: 0,
                  paddingTop: "56.25%", // 16:9
                }}
              />
              <Container style={{ marginTop: 10 }}>
                <h1>{postTitle}</h1>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam ipsa explicabo rem delectus eveniet nesciunt, iusto
                  animi sit deleniti atque at eum aut pariatur. Deleniti ullam
                  dolorem eligendi nobis numquam. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Consequuntur, inventore
                  provident! Cupiditate exercitationem alias dolore
                  reprehenderit ducimus nisi nulla, sequi adipisci sed labore
                  laudantium id qui odio perferendis! Nobis, id! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Nesciunt
                  voluptatum excepturi veniam aspernatur est id harum expedita
                  rem nihil culpa repudiandae, corporis quia dolores fuga
                  consectetur, libero dolore quasi nisi.
                </Typography>
              </Container>
            </Paper>
          </Grid>
          <Grid item md={4} xs={12}>
            <User />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default BlogDetail;
