import axios from 'axios';
import { GET_VIDEOS } from './types';

export const getVideos = () => async dispatch => {
    try {
        const res = await axios.get('https://66acf2fdf009b9d5c733eeea.mockapi.io/api/v1/videos');
        dispatch({
            type: GET_VIDEOS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};
