// reducers.js

import courseModel from "../courseModel";

const initialState = {
  allCourses: courseModel, // Initialize allCourses with the provided data
  enrolledCourses: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ENROLL_COURSE':
      // Check if the course is already enrolled
      if (state.enrolledCourses.some((course) => course.id === action.payload.id)) {
        alert('You are already enrolled in this course.');
        return state;
      }

      return {
        ...state,
        enrolledCourses: [...state.enrolledCourses, action.payload],
      };
    case 'REMOVE_ENROLLMENT':
      return {
        ...state,
        enrolledCourses: state.enrolledCourses.filter((course) => course.id !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
