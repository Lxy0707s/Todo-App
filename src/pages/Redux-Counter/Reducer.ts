import * as ActionType from './Action/ActionType';

export const reducer = (state:any, action:any) => {
    const {counterCaption} = action;

    switch (action.type){
        case ActionType.INCREMENT:
            return {...state, [counterCaption]:state[counterCaption] + 1};
        case ActionType.DECREMENT:
            // 拦截处理
            let value = state[counterCaption] - 1 >= 0? state[counterCaption] - 1:0;
            return {...state, [counterCaption]:value};
        default:
            return state;
    }
}