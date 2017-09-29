import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { categoryShape } from '../../../categories';
import { noop } from '../../../shared';

import './ProductItem.css';

export const productShape = PropTypes.shape({
  categories: PropTypes.arrayOf(categoryShape),
  description: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
});

export default class ProductItem extends PureComponent {
  static propTypes = {
    item: productShape,
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

    this._onSelectProduct = this._onSelectProduct.bind(this);
  }

  _onSelectProduct() {
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
        className={classNames('ProductItem', isActive ? 'ProductItem-selected' : '')}
        onClick={this._onSelectProduct}
      >
        <p className="ProductItem-title">{item.title}</p>
        { isActive ?
          <p className="ProductItem-description">{item.description}</p> :
          null
        }
      </div>
    );
  }
}
