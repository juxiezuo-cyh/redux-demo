// 定义reducer

import { ADD_NUMBER, ADD_ONE, CHANGE_BANNERS, CHANGE_RECOMMEND } from "./constants";

const initialState = {
  counters: 0,
  banners: [],
  recommends: [],
}

const reducers =  (state = initialState, { type, num, banners, recommends}) => {

  switch (type) {
    case ADD_NUMBER:
      return { ...state, counters: state.counters + num}
    case ADD_ONE:
      return { ...state, counters: state.counters + 1}
    case CHANGE_BANNERS:
      return { ...state, banners}
    case CHANGE_RECOMMEND:
      return { ...state, recommends}
  default:
    return state
  }
}

export default reducers;
