import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import List from './List';

Enzyme.configure({adapter: new Adapter()});

const SpanItem = ({ item }) => <span>{item.title}</span>;

describe('List component', () => {
  it('should be defined', () => {
    const wrapper = shallow(<List />);
    expect(wrapper.find(List)).toBeDefined();
  });

  it('should render a list of 3 span items', () => {
    const wrapper = shallow(<List
      items={[
        { id: 1, title: 'Ketchup' },
        { id: 2, title: 'Mayo' },
        { id: 3, title: 'Mustard' },
      ]}
      itemRenderer={<SpanItem />}
    />);

    expect(wrapper.find(SpanItem).length).toEqual(3);
  });

  it('should render an empty list', () => {
    const wrapper = shallow(<List />);

    expect(wrapper.find('.List-empty').length).toEqual(1);
  });

  it('should render a list with a header', () => {
    const wrapper = shallow(<List
      header={<div>Header</div>}
    />);

    expect(wrapper.contains(<div>Header</div>)).toBe(true);
  });

  it('should render a list with a title', () => {
    const wrapper = shallow(<List
      title="My title"
    />);

    expect(wrapper.find('h2').length).toEqual(1);
  });

  it('should render a list of 3 span items with one selected', () => {
    const wrapper = shallow(<List
      items={[
        { id: 1, title: 'Ketchup' },
        { id: 2, title: 'Mayo' },
        { id: 3, title: 'Mustard' },
      ]}
      itemRenderer={<SpanItem />}
      activeItem={{ id: 1, title: 'Ketchup' }}
    />);

    expect(wrapper.find(SpanItem).length).toEqual(3);
    expect(wrapper.find(SpanItem).at(0).props().isActive).toBe(true);
    expect(wrapper.find(SpanItem).at(1).props().isActive).toBe(false);
    expect(wrapper.find(SpanItem).at(2).props().isActive).toBe(false);
  });
});
