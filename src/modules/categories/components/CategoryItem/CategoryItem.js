import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { noop } from '../../../shared';

import './CategoryItem.css';

export const categoryShape = PropTypes.shape({
  'box_limit': PropTypes.number,
  hidden: PropTypes.bool,
  id: PropTypes.string,
  'is_default': PropTypes.bool,
  'recently_added': PropTypes.bool,
  title: PropTypes.string,
});

export default class CategoryItem extends PureComponent {
  static propTypes = {
    item: categoryShape,
    isActive: PropTypes.bool,
    style: PropTypes.object,

    onSelectItem: PropTypes.func,
  };

  static defaultProps = {
    item: {},
    isActive: false,
    style: {},

    onSelectItem: noop,
  };

  constructor(...args) {
    super(...args);

    this._onSelectCategory = this._onSelectCategory.bind(this);
  }

  _onSelectCategory() {
    this.props.onSelectItem(this.props.item);
  }

  _computeStyle() {
    return Object.assign(
      {},
      this.props.style,
    );
  }

  render() {
    const { item, isActive } = this.props;

    return (
      <div
        style={this._computeStyle()}
        className={classNames('CategoryItem', isActive ? 'CategoryItem-selected' : '')}
        onClick={this._onSelectCategory}
      >
        {item.title}
      </div>
    );
  }
}
