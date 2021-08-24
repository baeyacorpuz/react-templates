import { Breadcrumbs, Grid, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  breadcrumbs: {
    fontSize: 12,
  },
  headerTitle: {
    marginBottom: 40,
  },
});

const PageTitle = ({ title, link, page }) => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={2} className={classes.headerTitle}>
        <Grid item md={6} sm={12} xs={12}>
          <Typography variant="h2">{title}</Typography>

          <Breadcrumbs className={classes.breadcrumbs}>
            <Link color="inherit" to="/d/home">
              Dashboard
            </Link>
            <Link color="inherit" to={link}>
              {page}
            </Link>
          </Breadcrumbs>
        </Grid>
      </Grid>
    </>
  );
};

export default PageTitle;
