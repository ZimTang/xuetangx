import http from '../utils/http';

const getCourseCate = () => http.get('/category');
const getCourseByCate = (id: number) => http.get(`/course/${id}`);

export { getCourseCate, getCourseByCate };
