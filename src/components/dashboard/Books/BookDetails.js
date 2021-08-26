import { Grid, makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { useEffect } from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import { useHistory, useParams } from "react-router-dom";

import { getBookDetails } from "../../../api/books";
import PageTitle from "../../common/PageTitle";
import Cover from "../../../assets/images/cover.png"

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    boxShadow:
      "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
    padding: 24,
  },
  bookWrapper: {
    boxShadow:
      "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
    "& .MuiCardMedia-root": {
      height: 400
    }
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
}));

const BookDetails = () => {
  const params = useParams()
  const history = useHistory()
  const [book, setBook] = useState({})
  const [loading, setLoading] = useState(true)
  const classes = useStyles();
  console.log(params)

  useEffect(() => {
    const loadInitialData = async () => {
      let bookFound = await getBookDetails(params.id)
      setBook(bookFound)
      setLoading(false)
    }

    loadInitialData()
  }, [params.id])

  return (
    <>
      <Container maxWidth="lg">
        <PageTitle title="Books" page="Book Details" link="/d/books" />
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
              Back
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {
            book && !loading ? (
              <>
                <Grid item md={4} sm={12}>
                  <Card className={classes.bookWrapper}>
                    <CardMedia 
                      alt={book.bookTitle}
                      image={Cover}
                    />
                  </Card>
                </Grid>
                <Grid item md={8} sm={12}>
                  <Card className={classes.cardWrapper}>
                    <Typography variant="h2" color="primary" gutterBottom>{book.bookTitle}</Typography>
                    <ReactQuill readOnly={true} value={book.description} theme="bubble" />
                  </Card>
                </Grid>
              </>
            ) : (
              <>
                <Grid item md={4} sm={12}>
                  <Skeleton animation="wave" height={40} />
                </Grid>
                <Grid item md={8} sm={12}>
                  <Skeleton animation="wave" height={40} />
                </Grid>
              </>
            )
          }
        </Grid>
      </Container>
    </>
  );
}

export default BookDetails;