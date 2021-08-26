import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Dropzone from "react-dropzone";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    borderRadius: 4,
    padding: 16,
    border: "1px dashed lightgrey",
    height: "inherit",
    alignContent: "center",
    cursor: "pointer"
  },
}));

const FeaturedDropzone = ({ file, setFile }) => {
  const classes = useStyles()

  const onDrop = (file) => {
    setFile(
      file.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
    console.log("here");
  };

  const onDropReject = () => {
    console.log("rejected");
  };

  return (
    <>
      <Dropzone onDrop={onDrop} onDropRejected={onDropReject} multiple={false}>
        {({ getRootProps, getInputProps }) => (
          <Grid item xs={12} {...getRootProps({})} container className={classes.root}>
            <Card variant="elevation" elevation={0} >
              <div>
                <CardContent>
                  <Typography variant="h5">
                    Drop or Select a book cover
                  </Typography>
                  <Typography variant="body2" component="p">
                    Drop files or click thorugh your machine
                  </Typography>
                  <input {...getInputProps()} />
                </CardContent>
              </div>
            </Card>
          </Grid>
        )}
      </Dropzone>
    </>
  );
};

export default FeaturedDropzone;
