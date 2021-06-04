import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useHistory } from "react-router-dom";

const Post = () => {
  const history = useHistory();

  return (
    <Card style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>
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
      <CardActionArea>
        <CardMedia
          image="https://source.unsplash.com/random"
          title="Paella dish"
          style={{
            height: 0,
            paddingTop: "56.25%", // 16:9
          }}
        />
      </CardActionArea>
      <CardContent></CardContent>
    </Card>
  );
};

export default Post;
