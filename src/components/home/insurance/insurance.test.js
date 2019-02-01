import React from 'react';
import {shallow} from 'enzyme';
import Insurance from './insurance';
import * as english from "../../../text/english/english";
import * as spanish from "../../../text/spanish/spanish";

describe('Insurance', () => {
    test('renders english correctly', () => {
        const props = {
            text: english
        };
        const wrapper = shallow(<Insurance {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('renders spanish correctly', () => {
        const props = {
            text: spanish
        };
        const wrapper = shallow(<Insurance {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });
});