import http from '../utils/http';

const getSwiperData = () => http.get('/swiper');

export default getSwiperData;
