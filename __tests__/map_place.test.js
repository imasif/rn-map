import React from 'react';
import renderer from 'react-test-renderer';
import OverlayLocation from '../components/map_place';

const selectedLocation = {
    latitude: 23.86112258472573,
    longitude: 90.43031399239099,
    image: 'https://raw.githubusercontent.com/imasif/rn-map/main/assets/3.jpg',
    name: 'Great Scene',
    address: 'Dakkhinkhan, Dhaka, Bangladesh',
}

it('OverlayLocation renders without crashing', () => {
    const rendered = renderer.create(<OverlayLocation theme={'light'} selectedLocation={selectedLocation}/>).toJSON();
    expect(rendered).toBeTruthy();
});
it('OverlayLocation test against snapshot', () => {
    const tree = renderer.create(<OverlayLocation theme={'light'} selectedLocation={selectedLocation}/>).toJSON();
    expect(tree).toMatchSnapshot();
});