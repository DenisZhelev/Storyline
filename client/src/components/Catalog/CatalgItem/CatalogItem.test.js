import React from 'react';
import { shallow } from 'enzyme';
import { CatalogItem } from './CatalogItem';

describe('CatalogItem', () => {
  const props = {
    _id: '1',
    title: 'Test Story',
    imageUrl: 'test-image-url',
    preview: 'Test preview',
    ownerUsername: 'Test User',
  };

  it('renders the component without crashing', () => {
    shallow(<CatalogItem {...props} />);
  });

  it('displays the correct title, preview, and ownerUsername', () => {
    const wrapper = shallow(<CatalogItem {...props} />);

    expect(wrapper.find('.cardTitle').text()).toEqual(props.title);
    expect(wrapper.find('.cardText').text()).toEqual(props.preview);
    expect(wrapper.find('.cardAuthor').text()).toEqual(`By ${props.ownerUsername}`);
  });

  it('renders the correct image', () => {
    const wrapper = shallow(<CatalogItem {...props} />);

    expect(wrapper.find('img').prop('src')).toEqual(props.imageUrl);
  });

  it('contains a link with the correct URL', () => {
    const wrapper = shallow(<CatalogItem {...props} />);

    expect(wrapper.find('Link').prop('to')).toEqual(`/catalog/${props._id}`);
  });
});
