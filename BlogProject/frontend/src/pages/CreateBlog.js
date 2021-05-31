import { Container, Grid } from "@material-ui/core";
import NavBar from "../components/header/NavBar";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CreateBlog = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Grid container align="center">
          <Grid md={7} style={{ marginLeft: "auto", marginRight: "auto" }}>
            <div style={{ backgroundColor: "red", marginTop: 10 }}>
              <CKEditor
                editor={ClassicEditor}
                config={{
                  ckfinder: {
                    uploadUrl: "http://10.0.0.12:8000/uploadFile",
                  },
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                }}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor.getData());
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor.getData());
                }}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CreateBlog;
