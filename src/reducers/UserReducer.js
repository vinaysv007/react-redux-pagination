import * as types from '../action/Types';

const init = {
    response: null,
    error: null,
    pageNum: null
}

const userReducer = (state = init, action) => {
    switch (action.type) {
        case types.USERS_REQ:
            state = { ...state, response: null, error: null, pageNum: null }
            break;
        case types.USERS_RES:
            state = { ...state, response: action.payload, error: null, pageNum: null }
            break;
        case types.USERS_ERROR:
            state = { ...state, response: null, error: action.payload, pageNum: null }
            break;
        case types.GO_NEXT_PAGE:
            state = { ...state, response: null, error: null, pageNum: action.payload }
            break;
        default:
            break;
    }
    return state;
}

export default userReducer;