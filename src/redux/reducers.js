// Define your Redux reducers here
import {
  FETCH_COURSES_SUCCESS,
  ENROLL_COURSE_SUCCESS,
  MARK_COURSE_COMPLETED_SUCCESS,
} from './actions';

const initialState = {
  courses: [],
  enrolledCourses: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_SUCCESS:
      return {
        ...state,
        courses: action.payload,
      };

    case ENROLL_COURSE_SUCCESS:
      return {
        ...state,
        enrolledCourses: [...state.enrolledCourses, action.payload],
      };

    case MARK_COURSE_COMPLETED_SUCCESS:
      return {
        ...state,
        enrolledCourses: state.enrolledCourses.map((course) =>
          course.id === action.payload
            ? { ...course, completed: true }
            : course
        ),
      };

    default:
      return state;
  }
};

export default rootReducer;
