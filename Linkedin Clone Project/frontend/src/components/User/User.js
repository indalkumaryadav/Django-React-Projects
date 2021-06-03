import {
  Avatar,
  Button,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@material-ui/core";
const User = () => {
  return (
    <Card style={{ marginTop: 10 }}>
      <div
        style={{ height: 150, width: "100%", backgroundColor: "black" }}
      ></div>
      <CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "-60px",
          }}
        >
          <IconButton>
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
        </div>
      </CardContent>
    </Card>
  );
};

export default User;
