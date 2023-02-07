export const formatDate = (dateFromApi) => {
  const dateFormat = new Date(dateFromApi);
  return dateFormat.toDateString().slice(4);
};

export const formatDateTime = (dateFromApi) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const dateFormat = new Date(dateFromApi);
  return dateFormat.toLocaleString("en-GB", options);
};
