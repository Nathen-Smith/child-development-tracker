import axios from "axios";

// https://stackoverflow.com/questions/63912645/configure-base-url-in-axios-with-react-typescript
const instance = axios.create({
  baseURL:
    process.env.REACT_APP_ENV === "production"
      ? "https://nathensmith-wpfp-server-6v9xp.ondigitalocean.app/api"
      : "http://localhost:8080/api",
});

export default instance;
