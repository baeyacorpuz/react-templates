import { Button, Container, Grid, makeStyles } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useEffect } from "react";
import Helmet from "react-helmet";
import { useHistory } from "react-router-dom";
import PageTitle from "../../common/PageTitle";

const useStyles = makeStyles((theme) => ({
  buttonWrapper: {
    position: "relative",
  },
  button: {
    position: "absolute",
    top: -75,
    "@media (max-width: 600px)": {
      top: -50,
    },
  },
}));

const Books = () => {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const handleClick = () => {
    history.push("/dashboard/book");
  };
  return (
    <>
      <Helmet title="Product"></Helmet>
      <Container maxWidth="lg">
        <PageTitle title="Books" page="Book" link="/dashboard/books" />
        <Grid container spacing={3} className={classes.buttonWrapper}>
          <Grid
            item
            xs={12}
            container
            justifyContent="flex-end"
            className={classes.button}
          >
            <Button
              color="primary"
              variant="contained"
              onClick={handleClick}
              startIcon={<Add />}
            >
              New Book
            </Button>
          </Grid>
          <Grid item xs={12}>
            <div style={{ height: 600, width: "100%" }}></div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Books;
