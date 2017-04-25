import React from 'react';
import { connect } from 'react-redux';

import { setSort } from '../../actions/sortActions';

import FeedHeaderItem from './FeedHeaderItem';
import '../../styles/Feed/FeedHeaderItem.css';

class FeedHeaderItemContainer extends React.Component {
  render () {
    const column = this.props.column;
    const displayName = column.charAt(0).toUpperCase()
                      + column.slice(1, column.length);

    let sortAsc = 'fa fa-arrow-circle-up';
    let sortDsc = 'fa fa-arrow-circle-down';

    const clearAction = this.props.setSort({ column: '', order: '' });
    let ascAction = this.props.setSort({ column, order: 'asc' });
    let dscAction = this.props.setSort({ column, order: 'dsc' });

    // If the column name is the current sort column, highlight the
    // corresponding order icon, and set the action of that icon to clear
    // the sort order.

    if (this.props.column === this.props.sort.column) {
      if (this.props.sort.order === 'asc') {
        sortAsc += ' iconSelected';
        ascAction = clearAction;
      } else {
        sortDsc += ' iconSelected';
        dscAction = clearAction;
      }
    }

    return (
      <th className={column}>
        <h3>{displayName}
          <span className='sortIcons'>
            <FeedHeaderItem iconClass={sortAsc} action={ascAction}/>
            <FeedHeaderItem iconClass={sortDsc} action={dscAction}/>
          </span>
        </h3>
      </th>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  sort: state.sort,
  column: ownProps.column,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setSort: (sort) => dispatch(setSort(sort)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedHeaderItemContainer);
