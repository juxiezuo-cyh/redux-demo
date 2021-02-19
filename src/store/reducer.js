// 定义reducer

import { ADD_NUMBER, ADD_ONE } from "./constants";

const initialState = {
  counters: 0
}

const reducers =  (state = initialState, { type, num }) => {
  switch (type) {
    case ADD_NUMBER:
      return { ...state, counters: state.counters + num}
    case ADD_ONE:
        return { ...state, counters: state.counters + 1}
  default:
    return state
  }
}

export default reducers;
