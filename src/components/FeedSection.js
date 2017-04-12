import React from 'react';

class FeedSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: props.feeds
    };
  }

  render() {
    return(
      <div>{ this.state.feeds.test }</div>
    );
  }
}

export default FeedSection;
