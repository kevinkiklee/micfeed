import sortBy from 'lodash/sortBy';

// The sorting logic has been stored as an object format.  When invoked, it
// returns an object to easily access the corresponding sorting function.

// lodash/sortBy library has been utilized.

const sortActions = (articles) => ({
  author: {
    asc: () => sortBy(articles, (o) => (
      `${o.profile.first_name} ${o.profile.last_name}`
    )),
    dsc: () => sortBy(articles, (o) => (
      `${o.profile.first_name} ${o.profile.last_name}`
    )).reverse(),
  },
  words: {
    asc: () => sortBy(articles, (o) => o.words),
    dsc: () => sortBy(articles, (o) => o.words).reverse(),
  },
  submitted: {
    asc: () => sortBy(articles, (o) => o.publish_at),
    dsc: () => sortBy(articles, (o) => o.publish_at).reverse(),
  }
});

export default sortActions;
