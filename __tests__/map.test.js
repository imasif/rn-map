import React from 'react';
import renderer from 'react-test-renderer';
import Map from '../components/map';
const changeTheme = (theme) => {
    console.log(theme);
}
it('Map renders without crashing', () => {
    const rendered = renderer.create(<Map theme={'light'} changeTheme={changeTheme}/>).toJSON();
    expect(rendered).toBeTruthy();
});
it('Map test against snapshot', () => {
    const tree = renderer.create(<Map theme={'light'} changeTheme={changeTheme}/>).toJSON();
    expect(tree).toMatchSnapshot();
});