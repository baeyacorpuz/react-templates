import { Container, Grid, TextField, Button } from "@material-ui/core"

const Login = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item md={8}></Grid>
        <Grid item md={4}>
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
              <Button></Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;