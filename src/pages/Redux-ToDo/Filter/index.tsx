import * as actions from './actions';
import reducer from './reducer';
import FilterView from './views/filters';

// 暴露行为，store状态，view视图，提供外部调用
export {actions, reducer, FilterView};