// reducers.js

import courseModel from "../courseModel";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    // Handle potential errors while saving state
  }
};

const initialState = {
  allCourses: courseModel,
  enrolledCourses: loadState()?.enrolledCourses || [], // Load enrolled courses from storage
};

const rootReducer = (state = initialState, action) => {
  let nextState;

  switch (action.type) {
    case 'ENROLL_COURSE':
      nextState = {
        ...state,
        enrolledCourses: [...state.enrolledCourses, action.payload],
      };
      break;
    case 'REMOVE_ENROLLMENT':
      nextState = {
        ...state,
        enrolledCourses: state.enrolledCourses.filter((course) => course.id !== action.payload),
      };
      break;
    default:
      nextState = state;
  }

  saveState(nextState); // Save state to storage after each action
  return nextState;
};

export default rootReducer;
