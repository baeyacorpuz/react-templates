import {
  Button,
  FormControlLabel,
  Grid,
  makeStyles,
  Paper,
  Switch,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "mui-rff";
import { Form } from "react-final-form";
import { countries } from "../../../utils/countries";
import ProfileDropzone from "../../common/ProfileDropzone";
import TextField2 from "@material-ui/core/TextField";
import { useState } from "react";

const useStyles = makeStyles({
  paperWrapper: {
    padding: 24,
  },
});

const initialValues = {
  name: "Templated UI",
  emailAddress: "demo@templated.com",
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
                        value={initialValues.country}
                        placeholder={initialValues.country}
                        style={{ width: "100%" }}
                        options={countries}
                        autoHighlight
                        getOptionLabel={(option) => option.label}
                        renderInput={(params) => (
                          <TextField2
                            {...params}
                            label="Country"
                            value={initialValues.country}
                            placeholder={initialValues.country}
                            variant="outlined"
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password", // disable autocomplete and autofill
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
