// Implement API services (e.g., Axios configuration) here
import axios from 'axios';

const API_BASE_URL = 'your_backend_api_base_url';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchCourses = () => {
  return api.get('/courses');
};

export const enrollCourse = (courseId, userId) => {
  return api.post(`/enroll/${courseId}`, { userId });
};

export const markCourseCompleted = (courseId, userId) => {
  return api.post(`/markCompleted/${courseId}`, { userId });
};

// Add more API services as needed
