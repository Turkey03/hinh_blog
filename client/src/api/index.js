import axios from 'axios';

const urll = 'http://localhost:5000/posts';
export const fetchPosts = () =>  axios.get(urll);

export const createPost = (newPost) => axios.post(urll, newPost);

export const updatePost = (id, updatedPost) => axios.patch(`${urll}/${id}`, updatedPost);

export const likePost = (id) => axios.patch(`$urll}/${id}/likePost`);

export const deletePost = (id) => axios.delete(`${urll}/${id}`);
