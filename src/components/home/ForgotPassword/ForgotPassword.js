import { Container, Grid, TextField, Button, Typography, Box } from "@material-ui/core"
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item md={8} sm={12}></Grid>
        <Grid item md={4} sm={12}>
          <Grid container spacing={2}>
            <Grid item sm={12}>
              <TextField
                name="emailAddress"
                label="Email Address"
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
              >Submit</Button>

              <Box>
                <Typography variant="overline">
                  <Link to="/login">
                    Back to login
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

export default ForgotPassword;