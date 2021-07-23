import { Button, Container, Grid, makeStyles } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import Helmet from "react-helmet";
import PageTitle from "../../common/PageTitle";

const useStyles = makeStyles((theme) => ({
  buttonWrapper: {
    position: "relative",
  },
  button: {
    position: "absolute",
    top: -75,
    "@media (max-width: 600px)": {
      top: -50
    },
  },
}))

const Products = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
    history.push("/dashboard/ecommerce/create");
  };
  return (
    <>
      <Helmet title="Product"></Helmet>
      <Container maxWidth="lg">
        <PageTitle
          title="Ecommerce"
          page="Products"
          link="/dashboard/ecommerce/products"
        />
        <Grid container spacing={3} className={classes.buttonWrapper}>
          <Grid item xs={12} container justifyContent="flex-end" 
              className={classes.button}>
            <Button
              color="primary"
              variant="contained"
              onClick={handleClick}
              startIcon={<Add />}
            >
              New Product
            </Button>
          </Grid>
          <Grid item xs={12}>
            <div style={{ height: 600, width: "100%" }}>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Products;
