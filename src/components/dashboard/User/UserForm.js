import {
  Button,
  Container,
  FormControlLabel,
  Grid,
  makeStyles,
  Paper,
  Switch,
} from "@material-ui/core";
import { Autocomplete, TextField } from "mui-rff";
import { Form } from "react-final-form";
import { useHistory } from "react-router-dom";
import Helmet from "react-helmet";

import PageTitle from "../../common/PageTitle";
import countries from "../../../utils/countries";
import ProfileDropzone from "../../common/ProfileDropzone";
import { useState } from "react";
import { createUser } from "../../../api/users";

const useStyles = makeStyles({
  buttonWrapper: {
    position: "relative",
  },
  button: {
    position: "absolute",
    top: -75,
    "@media (max-width: 600px)": {
      top: -50,
    },
  },
  paperWrapper: {
    padding: 24,
    boxShadow:
      "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
  },
});

const initialValues = {
  name: "",
  emailAddress: "",
  country: "",
  state: "",
  city: "",
  zipCode: "",
  about: "",
};

const UserForm = () => {
  const history = useHistory();
  const classes = useStyles();
  const [publicProfile, setPublicProfile] = useState(false);

  const onSubmit = async (values) => {
    console.log(values);
    const user = await createUser(values)
    if (user.status) {
      history.goBack()
    }
  };

  const handleChange = (e) => {
    setPublicProfile(!publicProfile);
  };

  return (
    <>
      <Helmet title="Create Book"></Helmet>
      <Container maxWidth="lg">
        <PageTitle title="Create User" link={"/dashboard/home"} page="User" />
        <Grid container className={classes.buttonWrapper} spacing={3}>
          <Grid
            item
            xs={12}
            container
            justifyContent="flex-end"
            className={classes.button}
          >
            <Button
              color="primary"
              variant="outlined"
              onClick={() => history.goBack()}
            >
              Cancel
            </Button>
          </Grid>
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
                          variant="outlined"
                          color="primary"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6}>
                        <TextField
                          name="emailAddress"
                          label="Email Address"
                          variant="outlined"
                          color="primary"
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
      </Container>
    </>
  );
};

export default UserForm;
