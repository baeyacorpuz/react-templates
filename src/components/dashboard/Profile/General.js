import {
  Button,
  FormControlLabel,
  Grid,
  makeStyles,
  Paper,
  Switch,
} from "@material-ui/core";
import { TextField, Autocomplete } from "mui-rff";
import { Form } from "react-final-form";
import { countries } from "../../../utils/countries";
import ProfileDropzone from "../../common/ProfileDropzone";
import { useState } from "react";

const useStyles = makeStyles({
  paperWrapper: {
    padding: 24,
  },
});

const initialValues = {
  name: "Templated UI",
  emailAddress: "demo@templated-chi.vercel.app",
  country: "Philippines",
  state: "Metro Manila",
  city: "Quezon City",
  zipCode: "1105",
  about:
    "Nullam cursus lacinia erat. Vestibulum suscipit nulla quis orci. Fusce a quam. Morbi mollis tellus ac sapien. Praesent nonummy mi in odio.",
};

const General = () => {
  const [publicProfile, setPublicProfile] = useState(false);
  const classes = useStyles();
  const onSubmit = (values) => {
    console.log(values);
  };

  const handleChange = (e) => {
    setPublicProfile(!publicProfile);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} sm={12}>
          <Paper variant="outlined" className={classes.paperWrapper}>
            <ProfileDropzone />

            <FormControlLabel
              control={
                <Switch
                  checked={publicProfile}
                  onChange={handleChange}
                  name="publicProfile"
                  color="primary"
                />
              }
              label="Public Profile"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} sm={12}>
          <Paper variant="outlined" className={classes.paperWrapper}>
            <Form
              onSubmit={onSubmit}
              initialValues={initialValues}
              render={({ handleSubmit }) => (
                <form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                      <TextField
                        name="name"
                        label="Name"
                        value={initialValues.name}
                        variant="outlined"
                        color="primary"
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <TextField
                        name="emailAddress"
                        label="Email Address"
                        value={initialValues.emailAddress}
                        variant="outlined"
                        color="primary"
                        disabled
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                    <Autocomplete
                          name="country"
                          options={countries}
                          getOptionLabel={(option) => option.label}
                          getOptionValue={(option) => option.label}
                          renderOption={(option) => (
                            <>
                              {option.label} ({option.code}) +{option.phone}
                            </>
                          )}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              name="country"
                              label="Country"
                              variant="outlined"
                              inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password',
                              }}
                            />
                          )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <TextField
                        name="state"
                        label="State/Region"
                        variant="outlined"
                        color="primary"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        name="city"
                        label="City"
                        variant="outlined"
                        color="primary"
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <TextField
                        name="zipCode"
                        label="Zip Code"
                        variant="outlined"
                        color="primary"
                      />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <TextField
                        name="about"
                        label="About"
                        multiline
                        rows={4}
                        variant="outlined"
                        color="primary"
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
                </form>
              )}
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default General;
