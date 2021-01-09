import * as Notifications from "expo-notifications";

const sendNotification = (title, message) => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  Notifications.scheduleNotificationAsync({
    content: {
      title: title,
      body: message,
    },
    trigger: {
      seconds: 1,
    },
  });
};

export default {
  sendNotification,
};
