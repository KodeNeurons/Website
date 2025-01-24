import axios from 'axios';

const API = axios.create({ baseURL: 'https://kncbbd.onrender.com/api/projects' });

export const uploadProject = (data) => API.post('/upload', data);
export const getProjects = () => API.get('/');
