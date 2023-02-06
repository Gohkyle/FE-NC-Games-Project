import axios from "axios";

const ncGamesApi = axios.create({
  baseURL: "https://kyles-super-amazing-game-review-api.onrender.com/api",
});

export const getReviews = () => {
  return ncGamesApi.get("/reviews").then(({ data: { reviews } }) => {
    return reviews;
  });
};
