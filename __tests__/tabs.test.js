import React from 'react';
import renderer from 'react-test-renderer';
import TabBar from '../components/tabs';
it('TabBar renders without crashing', () => {
    const rendered = renderer.create(<TabBar />).toJSON();
    expect(rendered).toBeTruthy();
});
it('TabBar test against snapshot', () => {
    const tree = renderer.create(<TabBar />).toJSON();
    expect(tree).toMatchSnapshot();
});