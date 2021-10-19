const counterReducer = (state=0, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1 //or action.payload- if want to incrememnt by more than 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

export default counterReducer;