import * as actionTypes from './actions';

const initialState = {
    items: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            const newItem = {
                id: Math.random(),
                item: action.personData.item,
            }
            return {
                ...state,
                items: state.items.concat(newItem)
            }
    }
    return state;
};

export default reducer;