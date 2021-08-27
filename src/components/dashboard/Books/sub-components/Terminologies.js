import { Card, makeStyles } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core"
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet"
import { getTerminologies } from "../../../../api/books";
import SplashScreen from "../../../common/SplashScreen";

const useStyles = makeStyles({
})

const Terminologies = () => {
  const [loading, setLoading] = useState(true);
  const [terms, setTerms] = useState([])

  const classes = useStyles();

  useEffect(() => {
    const loadInitialData = async () => {
      const data = await getTerminologies()
      setTerms(data)
      setLoading(false);
    }

    loadInitialData()
  }, [])
  return (
    <>
      <Helmet title="Management: Terminologies"></Helmet>
      {loading ? (
        <SplashScreen />
      ) : (
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            {terms.map((term) => (
              <Grid item sm={12} key={term.term}>
                <Card className={classes.root} variant="outlined">
                  <CardContent>
                    <Typography variant="overline" color="secondary" component="h2">
                      {term.term}
                    </Typography>
                    <Typography variant="caption" color="textSecondary" component="p">
                      {term.definition}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </>
  );
}

export default Terminologies;