import React from 'react';
import { Provider } from 'react-redux';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import moxios from 'moxios';

import App from './App';

import configureStore from '../configureStore';
import { API_PRODUCTS_ROUTE, API_CATEGORIES_ROUTE } from '../config';

Enzyme.configure({adapter: new Adapter()});

function renderApp() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

describe('App behavior', () => {
  beforeEach(() => {
    moxios.install();

    moxios.stubRequest(API_PRODUCTS_ROUTE, {
      status: 200,
      responseText: {
        data: [
          { id: '1', title: 'Sprout', categories: [{ id: '1', title: 'Vegetable'}] },
          { id: '2', title: 'Coca', categories: [{ id: '2', title: 'Drinks'}]  },
          { id: '3', title: 'Orangina', categories: [{ id: '2', title: 'Drinks'}]  },
        ],
      },
    });

    moxios.stubRequest(API_CATEGORIES_ROUTE, {
      status: 200,
      responseText: {
        data: [
          { id: '1', title: 'Vegies' },
          { id: '2', title: 'Drinks' },
        ],
      },
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should render the app with some stub data', (done) => {
    const wrapper = mount(renderApp());

    moxios.wait(() => {
      wrapper.update();

      expect(wrapper.text().includes('Sprout')).toBe(true);
      expect(wrapper.text().includes('Coca')).toBe(true);
      expect(wrapper.text().includes('Orangina')).toBe(true);
      expect(wrapper.text().includes('Vegies')).toBe(true);
      expect(wrapper.text().includes('Drinks')).toBe(true);
      done();
    });
  });
});
