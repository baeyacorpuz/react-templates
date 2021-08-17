import { Container, Grid, TextField, Button, Typography, Box, makeStyles } from "@material-ui/core"
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  header: {
    marginBottom: 50
  }
})


const ForgotPassword = () => {
  const classes = useStyles()
  return (
    <Container maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item md={8} sm={12}></Grid>
        <Grid item md={4} sm={12}>
        <Grid item xs={12} className={classes.header}>
            <div>
            <Typography component="p" gutterBottom variant="h3">Forgot your password?</Typography>
            </div>
            <div>
            <Typography component="p" variant="caption" color="textSecondary">Please enter the email address associated with your account and We will email you a link to reset your password.</Typography>
            </div>
          </Grid>
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
              <Button
                size="large"
                fullWidth
                variant="contained"
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