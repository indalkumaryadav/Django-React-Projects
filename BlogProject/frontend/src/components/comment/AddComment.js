import { Avatar, Button, IconButton, TextField } from "@material-ui/core";

const AddComment = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        width: "100%",
        marginTop: 20,
        marginBottom: 10,
      }}
    >
      <IconButton>
        <Avatar />
      </IconButton>
      <div style={{ flex: 1 }}>
        <TextField fullWidth multiline rows={3} variant="outlined" />
        <Button
          style={{
            marginTop: 10,
            marginLeft: 4,
            backgroundColor: "#323ebe",
            color: "white",
            textTransform: "capitalize",
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default AddComment;
