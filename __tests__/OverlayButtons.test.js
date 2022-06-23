import React from 'react';
import renderer from 'react-test-renderer';
import OverlayButtonWrap from '../components/OverlayButtons';
it('OverlayButtonWrap renders without crashing', () => {
    const rendered = renderer.create(<OverlayButtonWrap />).toJSON();
    expect(rendered).toBeTruthy();
});
it('OverlayButtonWrap test against snapshot', () => {
    const tree = renderer.create(<OverlayButtonWrap />).toJSON();
    expect(tree).toMatchSnapshot();
});