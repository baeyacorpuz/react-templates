import { Button, Container, Grid } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import Helmet from "react-helmet";
import PageTitle from "../../common/PageTitle";

const Products = () => {
  const history = useHistory()
  const handleClick = () => {
    history.push("/dashboard/ecommerce/create")
  }
  return (
    <>
      <Helmet title="Product"></Helmet>
      <Container maxWidth="lg">
        <PageTitle
          title="Ecommerce"
          page="Products"
          link="/dashboard/ecommerce/products"
        />
        <Grid container spacing={3}>
          <Grid item xs={12} container justifyContent="flex-end">
            <Button color="primary" variant="contained" onClick={handleClick} startIcon={<Add />}>
              New Product
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Products;
