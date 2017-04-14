export const fetchFeed = (url) => {
  return fetch(url).then((res) => res.json());
};
