import * as TYPES from '../action-types';

export default function staff(state = {
        data: [],
        flag: 'all'
}, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case(TYPES.STAFF_CREATE):
           let {payload} = action;
           state.data.push(payload);      
            break;

    }
    return state;
}