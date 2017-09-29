import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form/immutable';

import { SEARCH_PRODUCTS, SEARCH_PRODUCTS_FIELDS } from '../../forms';

class SearchProductForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func,
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
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="search">Search</label>
          <Field
            name={SEARCH_PRODUCTS_FIELDS.search}
            component="input"
            type="text"
            onChange={this._submitSearch}
          />
        </div>
      </form>
    );
  }
}

export default reduxForm({ form: SEARCH_PRODUCTS })(SearchProductForm);
