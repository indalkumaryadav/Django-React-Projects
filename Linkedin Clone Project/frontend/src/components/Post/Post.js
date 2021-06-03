import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  IconButton,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import CommentIcon from "@material-ui/icons/Comment";
import { useHistory } from "react-router-dom";

const Post = () => {
  const history = useHistory();
  return (
    <Card style={{ width: 540, marginBottom: 10 }}>
      <CardHeader
        avatar={
          <IconButton onClick={() => history.push("/username")}>
            <Avatar aria-label="recipe">R</Avatar>
          </IconButton>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Indal Kumar"
        subheader="May 14, 2020"
      />
      <CardMedia
        image="https://source.unsplash.com/random"
        title="Paella dish"
        style={{
          height: 0,
          paddingTop: "56.25%", // 16:9
        }}
      />
      <CardContent></CardContent>
      <Divider />
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: 10,
          paddingTop: 10,
          cursor: "pointer",
        }}
      >
        <div>
          <span
            style={{
              textDecoration: "underline",
              fontSize: 14,
              textTransform: "capitalize",
              cursor: "pointer",
            }}
          >
            {10} Likes
          </span>
        </div>
        <div>
          <span
            style={{
              fontSize: 14,
              textTransform: "capitalize",
              textDecoration: "underline",
            }}
          >
            {10} Comments
          </span>
        </div>
      </Container>
      <Divider />
      <CardActions>
        <Button>
          <ThumbUpIcon style={{ fontSize: 22, marginRight: 5 }} />
          <span style={{ textTransform: "capitalize" }}>Like</span>
        </Button>
        <Button>
          <CommentIcon style={{ fontSize: 22, marginRight: 5 }} />
          <span style={{ textTransform: "capitalize" }}>Comment</span>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
