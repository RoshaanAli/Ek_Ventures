import { GET_VIDEOS } from '../actions/types';

const initialState = [];

export default function videosRed(state = initialState, action) {

    switch (action.type) {
        case GET_VIDEOS:
            return [...action.payload];
        default:
            return state;
    }
}
