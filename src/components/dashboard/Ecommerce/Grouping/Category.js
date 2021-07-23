import {
  Button,
  Card,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { TextField } from "mui-rff";
import { Form } from "react-final-form";
import { DataGrid } from "@material-ui/data-grid";
import Helmet from "react-helmet";

import PageTitle from "../../../common/PageTitle";

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    boxShadow:
      "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
    padding: 24,
  },
}));

const columns = [
  // { field: "id", headerName: "ID", width: "20%" },
  {
    field: "category",
    headerName: "Category",
    width: 300,
    editable: true,
  },
];

const rows = [
  {id: 1, category: "New"},
  {id: 2, category: "Sale"},
  {id: 3, category: "Sneakers"},
  {id: 4, category: "High Heels"},
  {id: 5, category: "Flats"},
  {id: 6, category: "Chucks"},
];

const Category = () => {
  const classes = useStyles();

  const onSubmit = (value) => {
    console.log(value)
    // rows.push({
    //   category: value
    // })
  };
  return (
    <>
      <Helmet title="Categories"></Helmet>
      <Container maxWidth="lg">
        <PageTitle
          title="Categories"
          link={"/dashboard/ecommerce/category"}
          page="Category"
        />
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Form
              onSubmit={onSubmit}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit} noValidate>
                  <Card className={classes.cardWrapper}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="h5" component="h5" gutterBottom>
                          Add new category
                        </Typography>
                      </Grid>
                      <Grid item xs={12} container>
                        <TextField
                          name="category"
                          label="Category Name"
                          variant="outlined"
                          color="primary"
                          fullWidth
                          helperText="The name is how it appears on your site."
                        />
                      </Grid>
                      <Grid item xs={12} container>
                        <TextField
                          name="description"
                          label="Description"
                          variant="outlined"
                          color="primary"
                          fullWidth
                          multiline
                          rows={4}
                          helperText="The description is not prominent by default; however, some themes may show it."
                        />
                      </Grid>

                      <Grid xs={12}>
                        <Button color="primary" variant="contained" onClick={handleSubmit}>
                          Create
                        </Button>
                      </Grid>
                    </Grid>
                  </Card>
                </form>
              )}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Card className={classes.cardWrapper}>
              <div style={{ height: 600, width: "100%" }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={10}
                  checkboxSelection
                  disableSelectionOnClick
                />
              </div>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Category;
