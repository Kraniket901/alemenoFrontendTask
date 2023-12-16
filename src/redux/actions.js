// actions.js

export const enrollCourse = (course) => ({
  type: 'ENROLL_COURSE',
  payload: course,
});

export const removeEnrollment = (courseId) => ({
  type: 'REMOVE_ENROLLMENT',
  payload: courseId,
});
