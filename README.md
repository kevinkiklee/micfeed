# MicFeed

![Main View](/docs/main.gif)

MicFeed is a single page application that populates the page with a JSON feed of articles.  

[Live Link](http:/micfeed.herokuapp.com)

*The application is currently hosted in the free tier of Heroku.  Please allow upto 30 seconds for the dyno to spin up.*

## Features

- The initial fetch retrieves the first 30 articles, and the application displays 10 articles at a time.  When all of the initial articles are displayed, the next set of articles are dispatched and added to the display.  

- The user can sort the table by author name, word count and submitted date in ascending and descending order.  

- The last sorted information is stored as a cookie in order for the sort order to persist on page exit.

## Implementation
The article feed application has been created React with create-react-app build configuration.  Redux has been utilized as the state management library.  

The following libraries have been utilized:
- react
- redux
- redux-thunk
- redux-logger
- react cookie
- moment

## Installation

Extract the included zip file and run `npm install` to install the dependencies.

Enter `npm start` in the terminal to start the development server.  The application can be accessed from `http://localhost:3000/`.  

## Notes

#### Cookies
- If the cookie exists, set the value as the preloadedState

```javascript
const preloadedState = { sort: {} };
const sort = cookie.load('sort');

if (sort) {
  const [column, order] = sort.split('-');
  preloadedState.sort.column = column;
  preloadedState.sort.order = order;
}

const store = configureStore(preloadedState);
```

- When a new sort order has been dispatched, and the store is updated, the value is stored into the cookie.

```javascript
export const setSort = (sort) => dispatch => {
  return () => {
    dispatch(receiveSort(sort));
    const sortString = `${sort.column}-${sort.order}`;
    cookie.save('sort', sortString);
  };
};
```

#### Sorting
- The sorting logic has been stored as an object format.  When invoked, it returns an object to easily access the corresponding sorting function.
- lodash/sortBy library has been utilized.

```javascript
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
```

## Wireframe

![Wireframe](/docs/wireframe.png)
