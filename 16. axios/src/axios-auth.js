import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://axios-latihan.firebaseio.com',
})
// instance.defaults.baseURL = 'https://axios-latihan.firebaseio.com'
instance.defaults.headers.common['something'] = 'something';

export default instance;