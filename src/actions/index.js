import * as actions from '../constants';
import fetchVideos from '../apis/youtube-api'


export function requestVidoes() {
    const items = [1, 2, 3, 4, 5];
    return dispatch => {
        dispatch({
            type: 'REQUEST_VIDEOS',
            payload: items
        });
    };
}
