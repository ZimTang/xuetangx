import http from '../utils/http';

const getFriendData = () => http.get('/friend');

export default getFriendData;
