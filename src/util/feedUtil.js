export const fetchFeed = () => {
  return fetch('../data/articles.json')
    .then((res) => res.json());
    // .then((data) => {
    //   console.log('data:', data);
    // });
};
