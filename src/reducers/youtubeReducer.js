import * as actions from '../constants'

export default function youtubeReducer(state = {items: []}, action) {
    switch (action.type) {
        case 'REQUEST_VIDEOS':
            console.log(action.payload);
            return {
                items: action.payload
            };
        default:
            return state
    }
}