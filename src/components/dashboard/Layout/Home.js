import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import Helmet from "react-helmet";
import PageTitle from "../../common/PageTitle";
import Reminder from "../../../assets/images/svg/reminder.svg"
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  paperWrapper: {
    padding: 32,
    minHeight: 250,
  },
  boxShadow: {
    boxShadow:
      "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
    minHeight: 150,
  },
  highlight: {
    backgroundColor: "rgb(67, 94, 147, 50%)",
    border: "none",
  },
  root: {
    display: 'flex',
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "100%",
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(4),
    paddingBottom: theme.spacing(1),
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Helmet title="App: Dashboard"></Helmet>
      <Container maxWidth="lg">
        <PageTitle title="Dashboard" link={"/d/home"} />
        <Grid container spacing={4}>
          <Grid item md={8}>
            <Card
              variant="outlined"
              // className={[classes.paperWrapper, classes.highlight, classes.root]}
              className={clsx(classes.paperWrapper, classes.highlight, classes.root)}
            >
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h3">
                    Welcome back,
                  </Typography>
                  <Typography component="h5" variant="h3">
                    Juan!
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there isn't anything
                  </Typography>
                  <Button className={classes.controls} variant="contained" color="primary">Products</Button>
                </CardContent>
              </div>
              <CardMedia
                className={classes.cover}
                image={Reminder}
              />
            </Card>
          </Grid>
          <Grid item md={4}>
            <Paper
              variant="outlined"
              className={classes.paperWrapper}
              contentEditable="primary"
            ></Paper>
          </Grid>
          <Grid item md={4}>
            <Paper variant="elevation" className={classes.boxShadow}></Paper>
          </Grid>
          <Grid item md={4}>
            <Paper variant="elevation" className={classes.boxShadow}></Paper>
          </Grid>
          <Grid item md={4}>
            <Paper variant="elevation" className={classes.boxShadow}></Paper>
          </Grid>
          <Grid item md={4}>
            <Paper variant="elevation" className={classes.boxShadow}></Paper>
          </Grid>
          <Grid item md={8}>
            <Paper variant="elevation" className={classes.boxShadow}></Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
