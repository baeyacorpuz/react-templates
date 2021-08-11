import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { Add } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import Helmet from "react-helmet";

import { getBooks } from "../../../api/books";
import PageTitle from "../../common/PageTitle";
import BookCover from "../../../assets/images/book_cover.png";

const useStyles = makeStyles((theme) => ({
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
  media: {
    height: 300,
    objectFit: "cover",
  },
}));

const columns = [
  {
    field: "id",
    headerName: "Book ID",
    valueGetter: (params) => `${params.getValue("_id")}`,
  },
  { field: "bookTitle", headerName: "Book Title", sortable: true },
  { field: "author", headerName: "Author/s", sortable: true },
];

const Books = () => {
  const classes = useStyles();
  const history = useHistory();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const loadInitialData = async () => {
      const data = await getBooks();
      setBooks(data);
    };

    loadInitialData();
  }, []);

  const handleClick = () => {
    history.push("/dashboard/book");
  };

  const handleBook = (book) => {
    console.log(book.bookTitle)
  }

  return (
    <>
      <Helmet title="Product"></Helmet>
      <Container maxWidth="lg">
        <PageTitle title="Books" page="Book" link="/dashboard/books" />
        <Grid container spacing={3} className={classes.buttonWrapper}>
          <Grid
            item
            xs={12}
            container
            justifyContent="flex-end"
            className={classes.button}
          >
            <Button
              color="primary"
              variant="contained"
              onClick={handleClick}
              startIcon={<Add />}
            >
              New Book
            </Button>
          </Grid>
          {books.length
            ? books.map((book) => (
                <Grid item xs={12} md={3} sm={3}>
                  <div>
                    <Card>
                      <CardActionArea
                        onClick={() => handleBook(book)}
                      >
                        <CardMedia
                          image={book.cover || BookCover}
                          className={classes.media}
                          alt={book.bookTitle}
                        />
                        <CardContent>
                          <Typography variant="caption">
                            {book.bookTitle}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                </Grid>
              ))
            : null}
        </Grid>
      </Container>
    </>
  );
};

export default Books;
