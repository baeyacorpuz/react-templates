import {
  Card,
  CardContent,
  Container,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import PageTitle from "../../common/PageTitle";
import notif from "../../../utils/notifications";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    setNotifications(notif);
  }, []);

  return (
    <>
      <Helmet title="Notifications"></Helmet>
      <PageTitle title="Notifications" link={"/dashboard/notifications"} />
      <Container maxWidth="lg">
        {notifications &&
          notifications.map((notif, index) => (
            <Card variant="outlined" key={index}>
              <CardContent>
                <Typography variant="h3" component="h2" gutterBottom>
                  {notif.headline}
                </Typography>
                <Typography variant="body2" component="p">
                  {notif.content}
                </Typography>
              </CardContent>
            </Card>
          ))}
      </Container>
    </>
  );
};

export default Notification;
