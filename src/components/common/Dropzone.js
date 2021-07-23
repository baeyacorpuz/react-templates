import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Dropzone from "react-dropzone";

import Upload from "../../assets/images/svg/upload.svg";

const useStyles = makeStyles((theme) => ({
  // container: {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignContent: "center",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   width: "100%",
  //   padding: 16,
  //   border: "1px dashed lightgrey",
  //   borderRadius: 4,
  //   minHeight: 250,
  // },
  root: {
    display: "flex",
    minHeight: 250,
    borderRadius: 4,
    padding: 16,
    border: "1px dashed lightgrey",
    "@media (max-width: 600px)": {
      flexWrap: "wrap",
    },
  },
  cover: {
    minWidth: "48%",
    "@media (max-width: 600px)": {
      minWidth: "100%",
      minHeight: 185,
    },
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    // flex: "1 0 auto",
  },
  // thumnailWrapper: {
  //   display:
  // }
  thumbnail: {
    height: 80,
    width: 80,
    objecFit: "cover",
    margin: 8,
    borderRadius: 8,
  },
}));

const DropZone = ({ files, setFiles, multiple }) => {
  const classes = useStyles();
  const onDrop = (files) => {
    setFiles(
      files.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
    console.log(files);
    console.log("here");
  };

  const onDropReject = () => {
    console.log("rejected");
  };

  const handleRemoveButton = () => {
    setFiles([])
  }
  return (
    <>
      <Dropzone onDrop={onDrop} onDropRejected={onDropReject} multiple={multiple}>
        {({ getRootProps, getInputProps }) => (
          <Grid container spacing={4}>
            <Grid
              item
              md={12}
              xs={12}
              {...getRootProps({})}
              className={classes.container}
            >
              <Card variant="elevation" elevation={0} className={classes.root}>
                <CardMedia className={classes.cover} image={Upload} />
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography variant="h5">Drop or Select file</Typography>
                    <Typography variant="body2" component="p">
                      Drop files or click through your machine
                    </Typography>
                    <input {...getInputProps()} />
                  </CardContent>
                </div>
              </Card>
            </Grid>
          </Grid>
        )}
      </Dropzone>
      <div>
        {files &&
          files.map((file) => (
            <img
              key={file.name}
              src={file.preview}
              alt={file.name}
              className={classes.thumbnail}
            />
          ))}
        {files.length ? (
          <Grid item xs={12} container justifyContent="flex-end">
            <Button variant="text" size="small" color="primary" onClick={handleRemoveButton}>
              Remove all
            </Button>
          </Grid>
        ) : null}
      </div>
    </>
  );
};

export default DropZone;
