// export const byAuthorAsc = (a, b) => {
//   const aName = `${a.profile.first_name} ${a.profile.last_name}`;
//   const bName = `${b.profile.first_name} ${b.profile.last_name}`;
//
//   if(aName < bName) return -1;
//   if(aName > bName) return 1;
//   return 0;
// };
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
