import { makeStyles } from '@material-ui/core'
import { Switch, Route } from 'react-router-dom'

import Navbar from "./Layout/Navbar"
import Sidebar from "./Layout/Sidebar"
import Page from './Pages/Page'
import Post from './Posts/Post'

const useStyles = makeStyles({
  appBarWrapper: {
    marginLeft: 100
  },
  contentWrapper: {
    marginTop: 75,
    marginLeft: 100
  }
})

const Dashboard = () => {
  const classes = useStyles()
  return (
    <>

      <Sidebar />

      <div className={classes.appBarWrapper}>
        <Navbar />
      </div>

      <div className={classes.contentWrapper}>
        <Switch>
          <Route path="/d/post" component={Post} />
          <Route path="/d/pages" component={Page} />
        </Switch>
      </div>
    </>
  );
}

export default Dashboard;