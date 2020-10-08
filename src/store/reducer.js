const initialState = {
    result:''
}

const reducer = (state = initialState, action) => {
    if (action.type === 'RESULT') {
        return {
            result: action.payLoad
        }
    }
    return state;
};

export default reducer;