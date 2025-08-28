import axios from 'axios';

// Create an instance of axios
const api = axios.create({
    baseURL: (typeof import.meta !== 'undefined'
        && import.meta.env
        && import.meta.env.MODE === 'development')

        ? 'http://localhost:8000'
        : 'https://py-bookshelf0.onrender.com' // 請改成你的 Render backend 網址
});

export default api;
