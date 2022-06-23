import React from 'react';
import renderer from 'react-test-renderer';
import SearchBar from '../components/searchbar';
it('SearchBar renders without crashing', () => {
    const rendered = renderer.create(<SearchBar theme={'light'} />).toJSON();
    expect(rendered).toBeTruthy();
});
it('SearchBar test against snapshot', () => {
    const tree = renderer.create(<SearchBar theme={'light'} />).toJSON();
    expect(tree).toMatchSnapshot();
});