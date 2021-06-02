import { IconButton, Paper } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = () => {
  return (
    <Paper
      elevation={0}
      style={{
        marginTop: 10,
        marginBottom: 10,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <IconButton>
        <TwitterIcon style={{ color: "blue" }} />
      </IconButton>
      <IconButton>
        <YouTubeIcon style={{ color: "red" }} />
      </IconButton>
      <IconButton>
        <FacebookIcon style={{ color: "blue" }} />
      </IconButton>
      <IconButton>
        <LinkedInIcon style={{ color: "blue" }} />
      </IconButton>
    </Paper>
  );
};

export default Footer;
