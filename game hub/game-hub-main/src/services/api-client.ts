import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f54c2ca0deff4ad4b7288ecf63c14ed5",
  },
});
