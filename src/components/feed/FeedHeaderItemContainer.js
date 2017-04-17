import React from 'react';
import { connect } from 'react-redux';

import { setSort } from '../../actions/sortActions';

import FeedHeaderItem from './FeedHeaderItem';

class FeedHeaderItemContainer extends React.Component {
  render () {
    const column = this.props.column;
    const displayName = column.charAt(0).toUpperCase()
                      + column.slice(1, column.length);

    let clearSortButton = '';

    let ascDisabled = false;
    let dscDisabled = false;

    let sortAsc = 'fa fa-arrow-circle-up';
    let sortDsc = 'fa fa-arrow-circle-down';

    if (this.props.column === this.props.sort.column) {
      if (this.props.sort.order === 'asc') {
        sortAsc += ' iconSelected';
        ascDisabled = true;
      } else {
        sortDsc += ' iconSelected';
        dscDisabled = true;
      }

      clearSortButton =
        <FeedHeaderItem iconClass='fa fa-times-circle'
                        action={this.props.setSort(
                                  { column: '',
                                    order: '', }
                                )}/>;
    }

    return (
      <th className={column}>
        <h3>{displayName}
        <span className='sortIcons'>
          <FeedHeaderItem iconClass={sortAsc}
                          action={this.props.setSort({ column, order: 'asc' })}
                          disabled={ascDisabled}/>
          <FeedHeaderItem iconClass={sortDsc}
                          action={this.props.setSort({ column, order: 'dsc' })}
                          disabled={dscDisabled}/>
          { clearSortButton }
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
