export const getFeedData = ({ feedData }) => (
  Object.keys(feedData).map(id => feedData[id])
);

export const getFeedTotal = ({ feedData }) => (
  Object.keys(feedData).reduce((acc, id) => (acc + feedData[id].count), 0)
);
