import {
  Avatar,
  Button,
  Card,
  CardHeader,
  IconButton,
} from "@material-ui/core";

const UserCard = () => {
  return (
    <Card style={{ marginBottom: 2, height: 80 }} elevation={0}>
      <CardHeader
        avatar={
          <IconButton>
            <Avatar aria-label="recipe">R</Avatar>
          </IconButton>
        }
        action={
          <Button
            style={{
              marginTop: 20,
              textTransform: "capitalize",
              borderRadius: 50,
              backgroundColor: "blue",
              width: 80,
              color: "white",
            }}
          >
            Connect
          </Button>
        }
        title="Indal Kumar"
        subheader="@indalkumar56"
      />
    </Card>
  );
};

export default UserCard;
