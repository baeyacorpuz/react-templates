
import { Container, Paper } from "@material-ui/core";
import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import PageTitle from "../../common/PageTitle";
import notif from "../../../utils/notifications"

const Notification = () => {
  const [notifications, setNotifications] = useState([])
  useEffect(() => {
    setNotifications(notif)
  }, [])

  return (
    <>
      <Helmet title="Notifications"></Helmet>
      <PageTitle title='Notifications' link={'/dashboard/notifications'} />
      <Container maxWidth="lg">
        {notifications && (
          <Paper>
            
          </Paper>
        )}
      </Container>
    </>
  );
}
 
export default Notification;