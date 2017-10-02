import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CatgoryItem from './CategoryItem';

Enzyme.configure({adapter: new Adapter()});

describe('CategoryItem', () => {
  it('should render the component', () => {
    const wrapper = shallow(<CatgoryItem />);
    expect(wrapper).toBeDefined();
  });

  it('should click on the CategoryItem', () => {
    const spy = jest.fn();
    const wrapper = shallow(<CatgoryItem
      onSelectItem={spy}
    />);

    expect(spy.mock.calls.length).toEqual(0);

    wrapper.simulate('click');

    expect(spy.mock.calls.length).toEqual(1);
  });
});
