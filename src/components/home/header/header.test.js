import React from 'react';
import Header from './header';
import {shallow} from 'enzyme';

describe('Header', () => {
    test('UI renders correctly', () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper).toMatchSnapshot();
    });
});