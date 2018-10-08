import * as types from './Types';

export const usersRequest = () => {
    return {
        type: types.USERS_REQ,
        payload: ''
    }
}

export const usersResponse = (data) => {
    return {
        type: types.USERS_RES,
        payload: data
    }
}

export const usersError = (data) => {
    return {
        type: types.USERS_ERROR,
        payload: data
    }
}

export const gotoNextPage = (pageNum) => {
    return {
        type: types.GO_NEXT_PAGE,
        payload: pageNum
    }
}