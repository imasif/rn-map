import React from 'react';
import renderer from 'react-test-renderer';
import Empty from '../components/empty';

it('Empty renders without crashing', () => {
    const rendered = renderer.create(<Empty />).toJSON();
    expect(rendered).toBeTruthy();
});
it('Empty test against snapshot', () => {
    const tree = renderer.create(<Empty />).toJSON();
    expect(tree).toMatchSnapshot();
});