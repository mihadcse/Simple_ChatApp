import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:8080/api',
});

export const createUser = (users) => API.post('/add-user', users);
export const getUsers = () => API.get('/get-user');

export const sendMessage = (message) => API.post('/messages', message);
export const getMessages = (senderId, receiverId) =>
    API.get(`/messages/${senderId}/${receiverId}`);

export const loginUser = (user) => axios.post('/login', user);

