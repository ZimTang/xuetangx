import http from '../utils/http';

const getCourseCate = () => http.get('/category');
const getCourseByCate = (id) => http.get(`/course/${id}`);

export { getCourseCate, getCourseByCate };
