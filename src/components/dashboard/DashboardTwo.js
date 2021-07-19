import { makeStyles } from '@material-ui/core'
import { Switch, Route, Redirect } from 'react-router-dom'

import Navbar from "./Layout/Navbar"
import SidebarTwo from './Layout/SidebarTwo'

const useStyles = makeStyles({
  appBarWrapper: {
    marginLeft: 280
  }
})

const DashboardTwo = () => {
  const classes = useStyles()
  return (
    <>

      <SidebarTwo />

      <div className={classes.appBarWrapper}>
        <Navbar />
      </div>

      <Switch>

      </Switch>
    </>
  );
}

export default DashboardTwo;