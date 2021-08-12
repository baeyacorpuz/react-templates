import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { PersonAdd } from "@material-ui/icons";
import { useState } from "react";
import Dropzone from "react-dropzone";

const useStyles = makeStyles({
  root: {
    margin: "48px 16px",
    cursor: "pointer",
  },
  boxWrapper: {
    height: 150,
    width: 150,
    border: "1px dashed lightgrey",
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    alignContent: "center",
    alignItems: "center",
  },
  innerBoxWrapper: {
    backgroundColor: "lightgray",
    padding: 8,
    height: 130,
    width: 130,
    borderRadius: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 32,
    textAlign: "center",
  },
  image: {
    height: "inherit",
    width: "inherit",
    borderRadius: 100
  }
});

const ProfileDropzone = () => {
  const classes = useStyles();
  const [profile, setProfile] = useState(null);

  const onDrop = (file) => {
    setProfile(
      file.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };
  return (
    <>
      <Dropzone onDrop={onDrop} multiple={false}>
        {({ getRootProps, getInputProps }) => (
          <Grid container spacing={2}>
            <Grid
              item
              md={12}
              {...getRootProps({})}
              container
              justifyContent="center"
              className={classes.root}
            >
              <Box component="div" className={classes.boxWrapper}>
                {profile ? (
                  <Box component="div" className={classes.innerBoxWrapper}>
                    <img src={profile[0].preview} alt="Profile" className={classes.image} />
                  </Box>
                ) : (
                  <Box component="div" className={classes.innerBoxWrapper}>
                    <PersonAdd />
                    <Typography variant="caption">Upload Photo</Typography>
                  </Box>
                )}
              </Box>
              <input {...getInputProps()} />
              <Typography
                variant="caption"
                component="p"
                color="textSecondary"
                className={classes.text}
              >
                Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3.1 MB
              </Typography>
            </Grid>
          </Grid>
        )}
      </Dropzone>
    </>
  );
};

export default ProfileDropzone;
