import {createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD expense

const addExpense = (
    {
        description = '', 
        node = '', 
        amount = 0, 
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        node,
        amount,
        createdAt
    }
});

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// Expenses reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) 
    {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE': 
            return state.filter(({id}) => {
                return id !== action.id;
            })
        default:
            return state;
    }
};

// Filters Reducer

const filtersReducerDefaultState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) 
    {
        default:
            return state;
    }
}

// Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
})

const expense1 = store.dispatch(addExpense({description: 'Rent', amount: 100}));
const expense2 = store.dispatch(addExpense({description: 'coffee', amount: 300}));

store.dispatch(removeExpense({ id: expense1.expense.id}))


const demoState = {
    expenses: [
        {
            id: 'asdfasg',
            description: 'rent',
            note: 'This was the final payment',
            amount: 54500,
            createdAt: 0
        }
    ],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};