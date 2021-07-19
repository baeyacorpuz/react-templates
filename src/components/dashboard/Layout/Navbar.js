import { AppBar, Grid, makeStyles, Toolbar, IconButton } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import { ExpandMoreRounded } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    backgroundColor: '#f4f6f9',
    boxShadow: 'none',
  }
})

const Navbar = () => {
  const classes = useStyles()
  return (
    <AppBar position="static" elevation={0} className={classes.root}>
      <Toolbar>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={6}>
            
          </Grid>
          <Grid item xs={6} container justifyContent="flex-end">
            <IconButton>
              <Avatar></Avatar>
              <ExpandMoreRounded />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
 
export default Navbar;