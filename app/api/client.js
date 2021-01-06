import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.0.11:9000/api",
});

export default () =>
  apiClient.get("/listings").then((response) => {
    if (!response.ok) {
      console.log(response.problem);
    } else {
      console.log(response);
    }
  });
