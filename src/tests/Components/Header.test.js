
import { shallow } from 'enzyme';
import React from 'react';
import Header from '../../components/Header';
import toJSON from 'enzyme-to-json';

test('Should render header correctly', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();

    
})