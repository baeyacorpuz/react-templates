import {
  Button,
  Grid,
  InputAdornment,
  makeStyles,
  Paper,
} from "@material-ui/core";
import { Facebook, Instagram, LinkedIn, Twitter } from "@material-ui/icons";
import { TextField } from "mui-rff";
import { Form } from "react-final-form";

const useStyles = makeStyles({
  paperWrapper: {
    padding: 32,
    borderRadius: 8,
  },
});

const initialValues = {
  facebook: "https://www.facebook.com/material-ui",
  twitter: "https://twitter.com/material-ui",
  linkedIn: "https://www.linkedin.com/material-ui",
  instagram: "https://www.instagram.com/material-ui",
};

const SocialLinks = () => {
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
                    name="facebook"
                    label="Facebook"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Facebook />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    name="twitter"
                    label="Twitter"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Twitter />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    name="linkedIn"
                    label="LinkedIn"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LinkedIn />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    name="instagram"
                    label="Instagram"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Instagram />
                        </InputAdornment>
                      ),
                    }}
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

export default SocialLinks;
