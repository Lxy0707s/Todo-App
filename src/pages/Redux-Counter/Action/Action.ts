import * as ActionType from './ActionType';

export const increment = (counterCaption:string) => {
    return {
        type: ActionType.INCREMENT,
        counterCaption: counterCaption
    };
};

export const decrement = (counterCaption:string) => {
    return {
        type: ActionType.DECREMENT,
        counterCaption: counterCaption
    };
};