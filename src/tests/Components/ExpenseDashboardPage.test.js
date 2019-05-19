import { shallow } from 'enzyme';
import React from 'react';
import ExpenseDashboard from '../../components/ExpenseDashboard';

test('Should render ExpenseDashboard correctly', () => {
    const wrapper = shallow(<ExpenseDashboard/>);
    expect(wrapper).toMatchSnapshot();
})