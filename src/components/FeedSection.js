import React from 'react';

class FeedSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: props.feed
    };
  }

  render() {
    return(
      <div>{ this.state.feed.test }</div>
    );
  }
}

export default FeedSection;
