// eslint-disable-next-line import/no-anonymous-default-export
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE_POST } from '../constants/actionTypes';
// eslint-disable-next-line import/no-anonymous-default-export
export  default  (posts = [], action) => {
    switch(action.type) {
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        case UPDATE:
        case LIKE_POST:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);        
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        default:
            return posts;
    }
};