import { Button, Container, Grid, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Add } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import Helmet from "react-helmet";

import { getBooks } from "../../../api/books";
import PageTitle from "../../common/PageTitle";
import SplashScreen from "../../common/SplashScreen";

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
    "@media (max-width: 600px)": {
      height: 225,
    },
  },
}));

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 150,
  },
  {
    field: "bookTitle",
    headerName: "Book Title",
    width: 300,
  },
  {
    field: "author",
    headerName: "Author/s",
    width: "350",
  },
  {
    field: "genre",
    headerName: "Genre/s",
    width: 300,
  },
];

const Books = () => {
  const classes = useStyles();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const loadInitialData = async () => {
      const data = await getBooks();
      const rows = data.map((book) => {
        const { row_id, ...rest } = book;
        return { id: book._id, ...rest };
      });
      setBooks(rows);
      setLoading(false);
    };

    loadInitialData();
  }, []);

  const handleClick = () => {
    history.push("/d/book");
  };

  return (
    <>
      <Helmet title="Management: Books"></Helmet>
      {loading ? (
        <>
          <SplashScreen />
        </>
      ) : (
        <Container maxWidth="lg">
          <PageTitle title="Books" page="Book" link="/d/books" />
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
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div style={{ height: 635, width: "100%" }}>
                <DataGrid
                  rows={books}
                  columns={columns}
                  pageSize={10}
                  checkboxSelection
                  disableSelectionOnClick
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Books;
