import axios from "axios";

const ncGamesApi = axios.create({
  baseURL: "https://kyles-super-amazing-game-review-api.onrender.com/api",
});

export const getReviews = (category) => {
  if (category) {
    return ncGamesApi
      .get(`/reviews?category=${category}`)
      .then(({ data: { reviews } }) => {
        return reviews;
      });
  } else
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

export const postComment = (review_id, username, body) => {
  return ncGamesApi
    .post(`/reviews/${review_id}/comments`, {
      username,
      body,
    })
    .then(({ data: { postedComment } }) => {
      return postedComment;
    });
};

export const getCategories = () => {
  return ncGamesApi.get("/categories").then(({ data: { categories } }) => {
    return categories;
  });
};
