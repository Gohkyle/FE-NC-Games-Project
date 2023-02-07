export const formatDate = (dateFromApi) => {
  const dateFormat = new Date(dateFromApi);
  return dateFormat.toDateString().slice(4);
};
