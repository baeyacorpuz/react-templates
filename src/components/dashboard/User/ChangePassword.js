import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
import { Form } from "react-final-form";
import { TextField } from "mui-rff";

const useStyles = makeStyles({
  paperWrapper: {
    padding: 32,
    borderRadius: 8,
  },
});

const initialValues = {
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const ChangePassword = () => {
  const classes = useStyles();

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper variant="outlined" className={classes.paperWrapper}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    type="password"
                    name="oldPassword"
                    label="Old Password"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="password"
                    name="newPassword"
                    label="New Password"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="password"
                    name="confirmPassword"
                    label="Confirm Password"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} container justifyContent="flex-end">
                  <Button
                    color="primary"
                    variant="outlined"
                    onClick={handleSubmit}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </form>
        )}
      />
    </>
  );
};

export default ChangePassword;
