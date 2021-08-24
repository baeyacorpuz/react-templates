import {
  Button,
  Card,
  Container,
  Grid,
  InputAdornment,
  makeStyles,
} from "@material-ui/core";
import { TextField } from "mui-rff";
import { useEffect, useState } from "react";
import { Form } from "react-final-form";

import Helmet from "react-helmet";
import { useHistory } from "react-router-dom";
import DropZone from "../../common/Dropzone";
import PageTitle from "../../common/PageTitle";

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    boxShadow:
      "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
    padding: 24,
  },
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
}));

const Create = () => {
  // const [productImage, setProductImage] = useState([])
  const [files, setFiles] = useState([]);
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const onSubmit = (values) => {
    let submit = {
      ...values,
      productGallery: files,
    };
    console.log(submit);
  };
  return (
    <>
      <Helmet title="Create Product"></Helmet>
      <Container maxWidth="lg">
        <PageTitle
          title="Create Product"
          link={"/d/home"}
          page="Product"
        />
        <Grid container className={classes.buttonWrapper}>
          <Grid
            item
            xs={12}
            container
            justifyContent="flex-end"
            className={classes.button}
          >
            <Button color="primary" variant="outlined" onClick={() => history.goBack()}>
              Cancel
            </Button>
          </Grid>
        </Grid>
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

                      <Grid item xs={12}>
                        <DropZone
                          files={files}
                          setFiles={setFiles}
                          multiple={false}
                        />
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
                <Grid item md={4} xs={12}>
                  <Card className={classes.cardWrapper}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        {/* <DropZone files={productImage} setFiles={setProductImage} multiple={false} /> */}
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          color="primary"
                          variant="outlined"
                          name="productCode"
                          label="Product Code"
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          color="primary"
                          variant="outlined"
                          name="productSKU"
                          label="Product SKU"
                        />
                      </Grid>

                      <Grid item xs={12}></Grid>
                    </Grid>
                  </Card>

                  <Card className={classes.cardWrapper}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          color="primary"
                          variant="outlined"
                          name="regularPrice"
                          label="Regular Price"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                $
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          color="primary"
                          variant="outlined"
                          name="salePrice"
                          label="Sale Price"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                $
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Card>

                  <Button
                    variant="contained"
                    onClick={handleSubmit}
                    fullWidth
                    color="primary"
                  >
                    Create Product
                  </Button>
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
