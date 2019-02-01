import React from 'react';
import {shallow} from 'enzyme';
import Intro from './intro';
import * as english from "../../../text/english/english";
import * as spanish from "../../../text/spanish/spanish";

describe('Intro', () => {
    test('English UI renders correctly', () => {
        const props = {
            text: english,
        };
        const wrapper = shallow(<Intro {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('Spanish UI renders correctly', () => {
        const props = {
            text: spanish,
        };
        const wrapper = shallow(<Intro {...props}/>);
        expect(wrapper).toMatchSnapshot();
    })
});