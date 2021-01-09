import client from "./client";

const register = (pushToken) => {
  client.post("/expoPushTokens", { token: pushToken });
  console.log("Pushing token", pushToken);
};
export default {
  register,
};
