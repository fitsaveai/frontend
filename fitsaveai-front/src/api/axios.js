import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fitsaveai.uk.r.appspot.com/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;