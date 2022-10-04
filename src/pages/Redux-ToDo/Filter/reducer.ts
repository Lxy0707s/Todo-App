import {SET_FILTER} from './actions';
import {FilterTypes} from '../constants'

// Filter组件store状态
const reducer = (state = FilterTypes.ALL, action: any) => {
  switch(action.type) {
    case SET_FILTER: {
      return action.filter;
    }
    default:
      return state;
  }
}

export default reducer;
