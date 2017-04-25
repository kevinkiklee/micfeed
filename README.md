# MicFeed

![Main View](/docs/main.gif)

MicFeed is a single page application that populates the page with a JSON feed of articles.  

[Live Link](http:/micfeed.herokuapp.com)

*The application is currently hosted in the free tier of Heroku.  Please allow upto 30 seconds for the dyno to spin up.*

## Features

- The initial fetch retrieves the first feed of articles, and the application adds 10 articles to the table at a time.  When all of the initial articles are displayed, the next set of articles are fetched and added to the view.  

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

#### Article Load
*Implemented after the initial submission*

In my initial submission, the feed filenames and the article count in those feeds were hardcoded.  Also, it was not possible to know total number of articles without loading all the data files first.  In real-life situation, this would not be feasible since it will not exactly have two files that have 30 articles each.  

To alleviate this problem, I added another JSON file that stores the meta information of each data files:

```json
[
  {
    "id": 0,
    "path": "../data/articles.json",
    "count": 30
  },
  {
    "id": 1,
    "path": "../data/more-articles.json",
    "count": 30
  },
  {
    "id": 2,
    "path": "../data/extra-articles.json",
    "count": 30
  }
]
```

When the FeedContainer component is mounted to the DOM, the feed-data file is fetched, then the initial feed of articles are fetched:

```javascript
componentDidMount() {
  this.props.fetchFeedData('../data/feed-data.json')
    .then(() => this.fetchArticles())
}

fetchArticles() {
  const path = this.props.feedData[this.feedCount].path;
  this.props.fetchFeed(path).then(() => (this.feedCount += 1));
}
```

Having the metadata of all the feeds enables us to find the total count of all articles, which gives us a way to disable the load button when the last file has been loaded.  The total count of feed articles is calculated with a selector, then the LoadMoreButton is disabled when all articles have been displayed onto the page:

```javascript
// selector.js
export const getFeedTotal = ({ feedData }) => (
  Object.keys(feedData).reduce((acc, id) => (acc + feedData[id].count), 0)
);

// FeedContainer.js
if (this.articleCount >= this.props.feedTotal) {
  disableLoadMore = true;
}
```

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
