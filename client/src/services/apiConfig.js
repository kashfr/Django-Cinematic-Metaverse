import axios from "axios";

// const api = axios.create({
//   baseURL:
//     process.env.NODE_ENV === "production"
//       ? "https://cinematic-metaverse.herokuapp.com/"
//       : "http://localhost:8000/",
// });

const api = axios.create({
  baseURL: "https://cinematic-metaverse.herokuapp.com/",
});

export default api;