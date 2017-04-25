export const getFeedData = ({ feedData }) => (
  Object.keys(feedData).map(id => feedData[id])
);
