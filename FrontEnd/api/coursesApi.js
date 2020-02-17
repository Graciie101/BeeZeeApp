import axios from 'axios';

const BASE_URL = 'https://localhost:44309/api';

export const fetchAllCoursesApi = () =>
  axios
    .get(`${BASE_URL}/Courses`)
    .then(response => response)
    .catch(error => error.response);
