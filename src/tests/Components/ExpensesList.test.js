import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseList } from '../../components/ExpenseList';
import expenses from '../Fixtures/expenses';

test('should render expense list with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
})

test('Should render expense list with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
})

