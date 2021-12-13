import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://nathensmith-wpfp-server-6v9xp.ondigitalocean.app/api"
      : "http://localhost:8080/api",
});

export default instance;
