import React from 'react';
import {shallow} from 'enzyme';
import Footer from './footer';
import * as english from "../../text/english/english";
import * as spanish from "../../text/spanish/spanish";

describe('Footer', () => {
    test('renders english correctly', () => {
        const props = {
            text: english,
        };
        const wrapper = shallow(<Footer {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('renders spanish correctly', () => {
        const props = {
            text: spanish,
        };
        const wrapper = shallow(<Footer {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });
});