import cookie from 'react-cookie';

export const RECEIVE_SORT = 'RECEIVE_SORT';

export const receiveSort = (sort) => ({
  type: RECEIVE_SORT,
  sort
});

export const setSort = (sort) => dispatch => {
  return (sort) => dispatch(receiveSort(sort))
    .then(() => {
      const sortString = `${sort.column}-${sort.order}`;
      cookie.save('sort', sortString);
    });
};