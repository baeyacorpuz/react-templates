import { Container, Grid, TextField, Button, Typography, Box } from "@material-ui/core"
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item md={8}></Grid>
        <Grid item md={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="firstName"
                label="First Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="lastName"
                label="Last Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="username"
                label="Username"
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
                variant="outlined"
                color="primary"
                type="submit"
              >Sign In</Button>

              <Box>
                <Typography variant="overline">
                  {'Already have an account? '}
                  <Link to="/login">
                    Log in
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

export default SignUp;