/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Container,
  Grid,
  makeStyles,
  Card,
  Typography,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { TextField } from "mui-rff";
import { Form } from "react-final-form";
import { useHistory } from "react-router-dom";
import Helmet from "react-helmet";

import PageTitle from "../../common/PageTitle";
import { useEffect, useState } from "react";
import FeaturedDropzone from "../../common/FeaturedDropzone";
import { createBook, getAuthors, getCategories } from "../../../api/books";
import MultiAutocomplete from "../../common/MultiAutocomplete";
import Quill from "../../common/Quill";

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
      top: -50,
    },
  },
  featuredImage: {
    height: 200,
  },
}));

const initialValues = {
  bookTitle: "",
  description: "",
  synopsis: "",
  author: [],
  genre: [],
  category: [],
  tag: [],
  cover: "",
};

const BookForm = () => {
  const [rating, setRating] = useState(0);
  const [state, setState] = useState("");
  const [file, setFile] = useState([]);
  const categories = [];
  const tags = [];
  const authors = [];
  const genres = [];

  useEffect(() => {
    const loadInitialData = async () => {
      const data = await getCategories();
      data.map((category) =>
        categories.push({
          label: category.category,
          title: category.category,
        })
      );
    };

    loadInitialData();
  }, [categories]);

  useEffect(() => {
    const loadInitialData = async () => {
      const data = await getAuthors();
      data.map((author) =>
        authors.push({
          label: author.authorName,
          title: author.authorName,
        })
      );
    };

    loadInitialData();
  }, [authors]);

  const classes = useStyles();
  const history = useHistory();

  const onSubmit = async (values) => {
    const input = values.category.map((inputValue) => inputValue.label);
    const inputTag = values.tag.map((inputValue) => inputValue.label);
    const inputAuthor = values.author.map((inputValue) => inputValue.label);
    const inputGenre = values.genre.map((inputValue) => inputValue.label);
    const submit = {
      ...values,
      rating,
      category: input,
      tag: inputTag,
      author: inputAuthor,
      genre: inputGenre,
      description: state
    };
    createBook(submit);
    history.goBack();
  };

  return (
    <>
      <Helmet title="Management: Create Book"></Helmet>
      <Container maxWidth="lg">
        <PageTitle title="Create Book" link={"/d/home"} page="Book" />
        <Grid container className={classes.buttonWrapper}>
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
        </Grid>
        <Form
          onSubmit={onSubmit}
          initialValues={initialValues}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item md={8}>
                  <Card className={classes.cardWrapper}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          color="primary"
                          variant="outlined"
                          name="bookTitle"
                          label="Book Title"
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Quill name="quilldescription" setState={setState} state={state} />
                        {/* <TextField 
                          name="description"
                          variant="outlined"
                          fullWidth
                          InputProps={{
                            inputProps: (
                              <Quill name="description" setState={setState} state={state} />
                            )
                          }}
                        /> */}
                      </Grid>

                      {/* <Grid item xs={12}>
                        <TextField
                          fullWidth
                          multiline
                          rows={10}
                          color="primary"
                          variant="outlined"
                          name="description"
                          label="Book Description"
                        />
                      </Grid> */}

                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          multiline
                          rows={10}
                          color="primary"
                          variant="outlined"
                          name="synopsis"
                          label="Synopsis"
                        />
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
                <Grid item md={4}>
                  <Card className={classes.cardWrapper}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <MultiAutocomplete
                          name="author"
                          options={authors}
                          label="Author/s"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <MultiAutocomplete
                          name="category"
                          options={categories}
                          label="Categories"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <MultiAutocomplete
                          name="genre"
                          options={genres}
                          label="Genre/s"
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <MultiAutocomplete
                          name="tag"
                          options={tags}
                          label="Tag/s"
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Typography variant="caption" component="p">
                          Rating
                        </Typography>
                        <Rating
                          name="rating"
                          value={rating}
                          onChange={(event, newValue) => {
                            setRating(newValue);
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Card>

                  <Card className={classes.cardWrapper}>
                    <Grid item xs={12} className={classes.featuredImage}>
                      <FeaturedDropzone file={file} setFile={setFile} />
                    </Grid>
                  </Card>

                  <Button
                    variant="contained"
                    onClick={handleSubmit}
                    fullWidth
                    color="primary"
                  >
                    Create Book
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

export default BookForm;
