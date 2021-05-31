import {
  Avatar,
  Button,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router";

const User = ({}) => {
  const history = useHistory();
  return (
    <Card style={{ marginTop: 10 }}>
      <div style={{ height: 150, width: "100%", backgroundColor: "red" }}></div>
      <CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "-60px",
          }}
        >
          <IconButton onClick={() => history.push("/username")}>
            <Avatar style={{ height: 70, width: 70 }}>I</Avatar>
          </IconButton>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography style={{ fontSize: 18, fontWeight: "bold" }}>
            Indal Kumar
          </Typography>
          <Typography style={{ color: "rgba(0,0,0,0.5)" }}>
            @username
          </Typography>
          <Button
            style={{
              width: 300,
              height: 40,
              backgroundColor: "#323ebe",
              color: "white",
              textTransform: "capitalize",
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            Follow
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default User;
