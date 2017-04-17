import sortBy from 'lodash/sortBy';

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
