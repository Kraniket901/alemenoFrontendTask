// Define your Redux actions here

// Action Types
export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';
export const ENROLL_COURSE_SUCCESS = 'ENROLL_COURSE_SUCCESS';
export const MARK_COURSE_COMPLETED_SUCCESS = 'MARK_COURSE_COMPLETED_SUCCESS';

// Action Creators
export const fetchCoursesSuccess = (courses) => ({
  type: FETCH_COURSES_SUCCESS,
  payload: courses,
});

export const enrollCourseSuccess = (course) => ({
  type: ENROLL_COURSE_SUCCESS,
  payload: course,
});

export const markCourseCompletedSuccess = (courseId) => ({
  type: MARK_COURSE_COMPLETED_SUCCESS,
  payload: courseId,
});
