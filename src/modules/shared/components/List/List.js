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
    title: PropTypes.string,
    activeItem: PropTypes.object,
    centered: PropTypes.bool,
    header: PropTypes.node,
  };

  static defaultProps = {
    layout: 'vertical',
    title: '',
    items: [],
    style: {},
    itemRenderer: <div />,
    itemKey: 'id',
    activeItem: {},
    centered: false,
    header: null,
  };

  _computeContainerStyle() {
    const { centered, style, layout } = this.props;

    return Object.assign(
      {},
      style,
      centered ? { alignItems: 'center' } : {},
      {flexDirection: flexDirections[layout]},
    );
  }

  render() {
    const { items, itemRenderer, itemKey, activeItem, title, header } = this.props;

    return (
      <div>
        {title.length > 0 ?
          <div className="List-header">
            <h2>{title}</h2>
          </div> :
          null
        }

        {header}

        <div className="List-container" style={this._computeContainerStyle()}>
          {items.length === 0 ? <div className="List-empty">No item</div> : null}
          {items.map((i, key) => (
            React.cloneElement(itemRenderer, {
              key,
              item: i,
              isActive: i[itemKey] === activeItem[itemKey],
            })
          ))}
        </div>
      </div>
    );
  }
}
