import axios from "axios";

const API_URL =
  "http://4.224.186.213/evaluation-service/notifications";

export const getNotifications = async (token) => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};