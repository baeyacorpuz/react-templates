import { Button, Container, Grid, Typography } from '@material-ui/core';

const Page = () => {
  return (
    <>
      <Container maxWidth="lg">

        <Grid container spacing={2}>
          <Grid item md={6} sm={12}>
            <Typography variant="h2">Pages</Typography>
          </Grid>
          <Grid item md={6} sm={12} container justifyContent="flex-end">
            <Button onClick={() => console.log("Hello")} variant="outlined">Add New</Button>
          </Grid>
        </Grid>
        <Grid container spacing={2}>

        </Grid>
      </Container>
    </>
  );
}

export default Page;