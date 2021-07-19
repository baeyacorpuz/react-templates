import { Container, Grid, TextField, Button, Typography, Box } from "@material-ui/core"
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item md={8} sm={12}></Grid>
        <Grid item md={4} sm={12}>
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
              >Log In</Button>

              <Box>
                <Typography variant="overline">
                  {'Don’t have an account yet? '}
                  <Link to="/sign-up">
                    Sign Up
                  </Link>
                </Typography>
                {'    '}
                <Typography variant="overline">
                  <Link to="/forgot-password">
                    Forgot your password?
                  </Link>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;