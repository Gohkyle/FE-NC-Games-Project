import axios from "axios";

const ncGamesApi = axios.create({
  baseURL: "https://kyles-super-amazing-game-review-api.onrender.com/api",
});

export const getReviews = () => {
  return ncGamesApi.get("/reviews").then(({ data: { reviews } }) => {
    return reviews;
  });
};

export const getReview = (review_id) => {
  return ncGamesApi
    .get(`/reviews/${review_id}`)
    .then(({ data: { review } }) => {
      return review;
    });
};

export const getCommentsByReview = (review_id) => {
  return ncGamesApi
    .get(`/reviews/${review_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const patchReview = (review_id, vote) => {
  return ncGamesApi
    .patch(`/reviews/${review_id}`, {
      inc_votes: vote,
    })
    .then(({ data: { updatedReview } }) => {
      return updatedReview;
    });
};
