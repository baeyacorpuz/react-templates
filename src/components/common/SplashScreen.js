import React from "react";
import { CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  display: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "70vh"
  }
})

const SplashScreen = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.display}>
        <CircularProgress />
      </div>
    </>
  );
};

export default SplashScreen;
