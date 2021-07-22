import { Card, Container, Grid, makeStyles } from "@material-ui/core";
import { TextField } from "mui-rff";
import { Form } from "react-final-form";

import Helmet from "react-helmet";
import PageTitle from "../../common/PageTitle";

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    boxShadow:
      "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
    padding: 32,
  },
}));

const Create = () => {
  const classes = useStyles();
  const onSubmit = () => {
    console.log("here");
  };
  return (
    <>
      <Helmet title="Create Product"></Helmet>
      <Container maxWidth="lg">
        <PageTitle
          title="Create Product"
          link={"/dashboard/home"}
          page="Product"
        />
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item md={8}>
                  <Card className={classes.cardWrapper}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          color="primary"
                          variant="outlined"
                          name="productName"
                          label="Product Name"
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          multiline
                          rows={10}
                          variant="outlined"
                          name="productDescription"
                          label="Product Description"
                          color="primary"
                        />
                      </Grid>

                      <Grid>
                        
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
                <Grid item md={4}>
                  <Card className={classes.cardWrapper}></Card>
                </Grid>
              </Grid>
            </form>
          )}
        />
      </Container>
    </>
  );
};

export default Create;
