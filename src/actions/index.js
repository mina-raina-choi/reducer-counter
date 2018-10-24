// 액션 생성자

import * as types from './ActionTypes';

export const increment = () => ({
    type: types.INCREMENT
})

export const decrement = () => ({
    type: types.DECREMENT
})

// 파라미터 있음
export const setColor = (color) => ({
    type: types.SET_COLOR,
    color
})