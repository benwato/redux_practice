export const increment = (/*num- if want to increment by more than one*/) => {
    return{
        type: 'INCREMENT',
        //payload: num //adding datato action
    } //will go into reducers check type of action and apply logic, update the store
}

export const decrement = () => {
    return{
        type: 'DECREMENT'
    } //will go into reducers check type of action and apply logic, update the store
}