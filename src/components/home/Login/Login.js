import {
  Container,
  Grid,
  Button,
  Typography,
  Box,
  makeStyles,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { TextField } from "mui-rff";
import { Form } from "react-final-form";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../../api/auth";

const useStyles = makeStyles({
  header: {
    marginBottom: 50,
  },
});

const Login = () => {
  const history = useHistory();
  const classes = useStyles();

  const onSubmit = async (values) => {
    const data = await login(values);
    if (data.status) {
      history.go("/dashboard/home");
      sessionStorage.setItem("token", data.token);
    } else {
      console.log("false");
    }
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item md={7} sm={12}></Grid>
        <Grid item md={5} sm={12}>
          <Grid item xs={12} className={classes.header}>
            <div>
              <Typography component="p" gutterBottom variant="h3">
                Sign in to B
              </Typography>
            </div>
            <div>
              <Typography component="p" variant="caption" color="textSecondary">
                Enter your details below
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} className={classes.header}>
            <Alert severity="info">
              Use email : demo@templated-chi.vercel.app / password : demo1234
            </Alert>
          </Grid>
          <Form
            onSubmit={onSubmit}
            initialValues={{
              emailAddress: "",
              password: "",
            }}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} noValidate>
                <Grid container spacing={2}>
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
                      type="password"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} container justifyContent="flex-end">
                    <Typography variant="caption" color="primary">
                      <Link to="/forgot-password">Forgot your password?</Link>
                    </Typography>
                  </Grid>
                  <Grid item sm={12}>
                    <Button
                      size="large"
                      fullWidth
                      variant="contained"
                      color="primary"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Log In
                    </Button>

                    <Box>
                      <Typography variant="overline">
                        {"Don’t have an account yet? "}
                        <Link to="/sign-up">Sign Up</Link>
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            )}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
