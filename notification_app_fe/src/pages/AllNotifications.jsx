import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import NotificationCard from "../components/NotificationCard";
import { getNotifications } from "../api/notificationApi";

function AllNotifications() {
  const [notifications, setNotifications] = useState([]);

  const TOKEN =  "YOUR_TOKEN";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNotifications(
          TOKEN,
          1,
          10,
        );

        setNotifications(data.notifications || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 2 }}>
        All Notifications
      </Typography>

      {notifications.map((item) => (
        <NotificationCard
          key={item.ID}
          notification={item}
        />
      ))}
    </Container>
  );
}

export default AllNotifications;