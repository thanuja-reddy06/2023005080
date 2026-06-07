import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import NotificationCard from "../components/NotificationCard";
import { getNotifications } from "../api/notificationApi";

function PriorityNotifications() {
  const [notifications, setNotifications] = useState([]);

  const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ0bGVra2FsYUBnaXRhbS5pbiIsImV4cCI6MTc4MDgxMzk2OCwiaWF0IjoxNzgwODEzMDY4LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMmQxMjY5YTItOWY5MC00OGM4LTk5MjktYTNhYWM5NjgyNDM5IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibGVra2FsYSB0aGFudWphIiwic3ViIjoiNzFhMTdhODMtNWM5YS00OWEzLWE5MTUtYWM0Zjc2YThiNDMwIn0sImVtYWlsIjoidGxla2thbGFAZ2l0YW0uaW4iLCJuYW1lIjoibGVra2FsYSB0aGFudWphIiwicm9sbE5vIjoiMjAyMzAwNTA4MCIsImFjY2Vzc0NvZGUiOiJ3Z0t0Z1oiLCJjbGllbnRJRCI6IjcxYTE3YTgzLTVjOWEtNDlhMy1hOTE1LWFjNGY3NmE4YjQzMCIsImNsaWVudFNlY3JldCI6InlRZHZCanpKY3VWRW5hQmoifQ.CnTl8nm2AyiI-aABqwLmAiyq-X33pbjxsldE1a33ImQ";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNotifications(TOKEN);

        console.log("FULL RESPONSE:", data);

        const list = Array.isArray(data)
          ? data
          : data.notifications || [];

        console.log("LIST:", list);

        const priority = {
          Placement: 3,
          Result: 2,
          Event: 1,
        };

        const sorted = list.sort(
          (a, b) =>
            (priority[b.Type] || 0) -
            (priority[a.Type] || 0)
        );

        setNotifications(sorted);
      } catch (error) {
        console.error("ERROR:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Priority Notifications
      </Typography>

      {notifications.map((item, index) => (
        <NotificationCard
          key={item.ID || index}
          notification={item}
        />
      ))}
    </Container>
  );
}

export default PriorityNotifications;