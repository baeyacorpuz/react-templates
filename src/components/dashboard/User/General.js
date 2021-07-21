import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField2 from "@material-ui/core/TextField"
import { TextField } from "mui-rff";
import { Form } from "react-final-form";
import { countries } from "../../../utils/countries";

const useStyles = makeStyles({
  paperWrapper: {
    padding: 32,
    borderRadius: 8,
  },
});

const initialValues = {
  name: "Templated UI",
  emailAddress: "demo@templated.com",
};

const General = () => {
  const classes = useStyles();
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Paper variant="outlined" className={classes.paperWrapper}>
            
          </Paper>
        </Grid>
        <Grid item xs={12} md={7}>
          <Paper variant="outlined" className={classes.paperWrapper}>
            <Form
              onSubmit={onSubmit}
              initialValues={initialValues}
              render={({ handleSubmit }) => (
                <form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        name="name"
                        label="Name"
                        value={initialValues.name}
                        variant="outlined"
                        color="primary"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        name="emailAddress"
                        label="Email Address"
                        value={initialValues.emailAddress}
                        variant="outlined"
                        color="primary"
                        disabled
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Autocomplete
                        name="country"
                        style={{ width: "100%" }}
                        options={countries}
                        autoHighlight
                        getOptionLabel={(option) => option.label} renderInput={(params) => (
                          <TextField2
                            {...params}
                            label="Country"
                            variant="outlined"
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: 'new-password', // disable autocomplete and autofill
                            }}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
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
                    <Grid item xs={12} md={6}>
                      <TextField
                        name="zipCode"
                        label="Zip Code"
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