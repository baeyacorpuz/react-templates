import {
  Container,
  Grid,
  Button,
  Typography,
  Box,
  makeStyles,
} from "@material-ui/core";
import { Autocomplete, TextField } from "mui-rff";
import { useState } from "react";
import { Form } from "react-final-form";
import { Link, useHistory } from "react-router-dom";
import { signup } from "../../../api/auth";

import countries from "../../../utils/countries";

const useStyles = makeStyles({
  header: {
    marginBottom: 50,
  },
});

const initialValues = {
  name: "",
  emailAddress: "",
  country: "",
  password: "",
};

const SignUp = () => {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = useState(countries[0])
  const [inputValue, setInputValue] = useState('')

  const onSubmit = async (values) => {
    console.log(values)
    const submit = {
      ...values,
    };
    const data = await signup(submit);
    if (data.status) {
      history.go("/login");
    } else {
      console.log("Error");
    }
  };
  return (
    <Container maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item md={8}></Grid>
        <Grid item md={4}>
          <Grid item xs={12} className={classes.header}>
            <div>
              <Typography component="p" gutterBottom variant="h3">
                Get started absolutely free
              </Typography>
            </div>
            <div>
              <Typography component="p" variant="caption" color="textSecondary">
                Free forever. No credit card needed.
              </Typography>
            </div>
          </Grid>
          <Form
            onSubmit={onSubmit}
            initialValues={initialValues}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      name="name"
                      label="Full Name"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Autocomplete
                      name="country"
                      options={countries}
                      onChange={(_, newValue) => {
                        setValue(newValue)
                      }}
                      value={value}
                      inputValue={inputValue}
                      getOptionLabel={(option) => option.label}
                      getOptionValue={(option) => option.label}
                      onInputChange={(_, newInputValue) => {
                        setInputValue(newInputValue)
                      }}
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
                            autoComplete: "new-password",
                          }}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="emailAddress"
                      label="Email Address"
                      variant="outlined"
                      type="email"
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
                      variant="contained"
                      color="primary"
                      type="submit"
                    >
                      Sign In
                    </Button>

                    <Box>
                      <Typography variant="overline">
                        {"Already have an account? "}
                        <Link to="/login">Log in</Link>
                      </Typography>
                    </Box>

                    <Grid item xs={12}>
                      <Typography variant="caption">
                        By registering, I agree to Templated Terms of Service
                        and Privacy Policy.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            )}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUp;
