import * as types from '../constant/ActionTypes';

const initialState = [
]

const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USER:
            return {
                ...state,
                userName: action.payload,
                loading: false
            }
        default: return [...state]
    }
}

export default userReducers;