import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form/immutable';

import { SEARCH_PRODUCTS, SEARCH_PRODUCTS_FIELDS } from '../../forms';

import './SearchProductForm.css';

class SearchProductForm extends PureComponent {
  static propTypes = {
    label: PropTypes.string,

    handleSubmit: PropTypes.func,
  };

  static defaultProps = {
    label: 'Search',
  };

  constructor(...args) {
    super(...args);

    this._submitSearch = this._submitSearch.bind(this);
  }


  _submitSearch() {
    const { submit } = this.props;

    setTimeout(() => {
      submit();
    }, 0);
  }

  render() {
    const { label, handleSubmit } = this.props;

    return (
      <form className="SearchProductForm" onSubmit={handleSubmit}>
        <label className="SearchProductForm-label" htmlFor="search">{label}</label>
        <Field
          className="SearchProductForm-field"
          name={SEARCH_PRODUCTS_FIELDS.search}
          component="input"
          type="text"
          onChange={this._submitSearch}
        />
      </form>
    );
  }
}

export default reduxForm({ form: SEARCH_PRODUCTS })(SearchProductForm);
