// 액션 생성자

import * as types from './ActionTypes';

export const increment = (index) => ({
    type: types.INCREMENT,
    index
})

export const decrement = (index) => ({
    type: types.DECREMENT,
    index
})

// 파라미터 있음
export const setColor = ({index, color}) => ({
    type: types.SET_COLOR,
    color,
    index
})


export const create = (color) => ({
    type: types.CREATE,
    color
})

export const remove = () => ({
    type: types.REMOVE
})