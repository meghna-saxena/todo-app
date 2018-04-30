import * as actionTypes from './actions';

const initialState = {
    items: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            const newItem = {
                id: Math.random(),
                name: action.name,
            }
            return {
                ...state,
                items: state.items.concat(newItem)
            }
        case actionTypes.REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.itemId)
            }
    }
    return state;
};

export default reducer;