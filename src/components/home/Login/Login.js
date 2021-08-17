import { Container, Grid, Button, Typography, Box } from "@material-ui/core";
import { TextField } from "mui-rff";
import { Form } from "react-final-form";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../../api/auth";

const Login = () => {
  const history = useHistory();

  const onSubmit = (values) => {
    const data = login(values);
    if (JSON.stringify(data) === "true") {
      history.go("/dashboard/home")
      localStorage.setItem("token", data);
    } else {
      console.log("false")
    }
  };

  console.log("login")

  return (
    <Container maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item md={8} sm={12}></Grid>
        <Grid item md={4} sm={12}>
          <Form
            onSubmit={onSubmit}
            initialValues={{
              username: "",
              passowrd: "",
            }}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} noValidate>
                <Grid container spacing={2}>
                  <Grid item sm={12}>
                    <TextField
                      name="username"
                      label="Username"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item sm={12}>
                    <TextField
                      name="password"
                      label="Password"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item sm={12}>
                    <Button
                      size="large"
                      fullWidth
                      variant="outlined"
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
                      {"    "}
                      <Typography variant="overline">
                        <Link to="/forgot-password">Forgot your password?</Link>
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
