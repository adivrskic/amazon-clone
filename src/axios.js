import axios from "axios";

const instance = axios.create({
  //Testing URL: http://localhost:5001/clone-9ebb2/us-central1/api
  baseURL: "https://us-central1-clone-9ebb2.cloudfunctions.net/api", // Cloud function URL.
});

export default instance;
