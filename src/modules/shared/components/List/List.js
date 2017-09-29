import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './List.css';

const flexDirections = {
  vertical: 'column',
  horizontal: 'row',
};

export default class List extends PureComponent {
  static propTypes = {
    layout: PropTypes.oneOf(['vertical', 'horizontal']),
    items: PropTypes.array,
    style: PropTypes.object,
    itemRenderer: PropTypes.node,
    itemKey: PropTypes.string,
    activeItem: PropTypes.object,
  };

  static defaultProps = {
    layout: 'vertical',
    items: [],
    style: {},
    itemRenderer: <div />,
    itemKey: 'id',
    activeItem: {},
  };

  _computeContainerStyle() {
    return Object.assign(
      {},
      this.props.style,
      {flexDirection: flexDirections[this.props.layout]},
    );
  }

  render() {
    const { items, itemRenderer, itemKey, activeItem } = this.props;

    return (
      <div className="List-container" style={this._computeContainerStyle()}>
        {items.map((i, key) => (
          React.cloneElement(itemRenderer, {
            key,
            item: i,
            isActive: i[itemKey] === activeItem[itemKey],
          })
        ))}
      </div>
    );
  }
}
