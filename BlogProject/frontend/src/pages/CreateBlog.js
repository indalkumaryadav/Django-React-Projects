import { Button, Container, Grid, Paper, TextField } from "@material-ui/core";
import NavBar from "../components/header/NavBar";

const CreateBlog = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Grid container>
          <Grid md={7} style={{ marginLeft: "auto", marginRight: "auto" }}>
            <Container>
              <form>
                <TextField
                  label="Title"
                  fullWidth
                  multiline
                  rows={2}
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  label="Title"
                  margin="normal"
                  fullWidth
                  multiline
                  rows={5}
                  variant="outlined"
                />

                <Button
                  style={{
                    marginTop: 10,
                    marginLeft: 4,
                    width: 200,
                    height: 45,
                    fontSize: 16,
                    backgroundColor: "#323ebe",
                    color: "white",
                    textTransform: "capitalize",
                  }}
                >
                  Create
                </Button>
              </form>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CreateBlog;
