import { Grid, makeStyles } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import { useParams } from "react-router-dom";
import { getBookDetails } from "../../../api/books";
import PageTitle from "../../common/PageTitle";

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    boxShadow:
      "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
    padding: 24,
  },
}));

const BookDetails = () => {
  const params = useParams()
  const [book, setBook] = useState({})
  const classes = useStyles();

  useEffect(() => {
    const loadInitialData = async () => {
      let bookFound = await getBookDetails(params.id)
      setBook(bookFound)
    }

    loadInitialData()
  }, [params.id])

  return (
    <>
      <Container maxWidth="lg">
        <PageTitle title="Books" page="Book Details" link="/d/books" />
        <Grid container spacing={3}>
          <Grid item md={4} sm={12}>

          </Grid>
          <Grid item md={8} sm={12}>
            <Card className={classes.cardWrapper}>
              <ReactQuill readOnly={true} value={book.description} theme="bubble" />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default BookDetails;