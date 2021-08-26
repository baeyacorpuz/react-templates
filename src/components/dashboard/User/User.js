import { Button, Container, Grid, makeStyles } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { Add } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useHistory } from "react-router-dom";
import { getUsers } from "../../../api/users";
import PageTitle from "../../common/PageTitle";
import SplashScreen from "../../common/SplashScreen";

const useStyles = makeStyles({
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
});

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 150,
  },
  {
    field: "name",
    headerName: "Name",
    width: 250,
  },
  {
    field: "country",
    width: 250,
    headerName: "Country",
  },
  {
    field: "emailAddress",
    width: 250,
    headerName: "Email Address",
  },
];

const User = () => {
  const classes = useStyles();
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    history.push("/d/user");
  };

  useEffect(() => {
    const loadInitialData = async () => {
      const data = await getUsers();

      const rows = data.user.map((row) => {
        const { row_id, ...rest } = row;
        return { id: row._id, ...rest };
      });
      await setUsers(rows);
      setLoading(false);
    };

    loadInitialData();
  }, []);

  return (
    <>
      <Helmet title="Management: Users"></Helmet>
      {loading ? (
        <>
          <SplashScreen />
        </>
      ) : (
        <Container maxWidth="lg">
          <PageTitle title="Users" page="User" link="/d/user" />
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
                New User
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div style={{ height: 635, width: "100%" }}>
                <DataGrid
                  rows={users}
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

export default User;
