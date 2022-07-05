import http from '../utils/http';

const getLiveData = () => http.get('/live');

export default getLiveData;
