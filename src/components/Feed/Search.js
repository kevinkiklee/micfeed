import React from 'react';
import { connect } from 'react-redux';

import { setSearchString } from '../../actions/searchActions';

import '../../styles/Feed/Search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ searchString: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.setSearchString(this.state.searchString);
  }

  render () {
    return (
      <div className='Search'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleInput} />
          <input type='submit' className='button' value="Search" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setSearchString: (string) => dispatch(setSearchString(string)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
