import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  header: {
    marginBottom: 50
  }
})

const SignUp = () => {
  const classes = useStyles()
  return (
    <Container maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item md={8}></Grid>
        <Grid item md={4}>
        <Grid item xs={12} className={classes.header}>
            <div>
            <Typography component="p" gutterBottom variant="h3">Get started absolutely free</Typography>
            </div>
            <div>
            <Typography component="p" variant="caption" color="textSecondary">Free forever. No credit card needed.</Typography>
            </div>
          </Grid>
          <Grid container spacing={2}>
            <Grid item sm={6} xs={12}>
              <TextField
                name="firstName"
                label="First Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                name="lastName"
                label="Last Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="emailAddress"
                label="Email Address"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                size="large"
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Sign In
              </Button>

              <Box>
                <Typography variant="overline">
                  {"Already have an account? "}
                  <Link to="/login">Log in</Link>
                </Typography>
              </Box>

              <Grid xs={12}>
                <Typography variant="caption">
                  By registering, I agree to Templated Terms of Service and
                  Privacy Policy.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUp;
