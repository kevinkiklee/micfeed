import React from 'react';
import { connect } from 'react-redux';

import { setSort } from '../../actions/sortActions';

import SortButton from './SortButton';

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
        <SortButton iconClass='fa fa-times-circle'
                    onClick={() => this.props.setSort()}/>;
    }

    return (
      <th className={column}>
        <h3>{displayName}
        <span className='sortIcons'>
          <SortButton iconClass={sortAsc}
                      onClick={() => this.props.setSort({ column: column,
                                                          order: 'asc' })}
                      disabled={ascDisabled}/>
          <SortButton iconClass={sortDsc}
                      onClick={() => this.props.setSort({ column: column,
                                                          order: 'dsc' })}
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
