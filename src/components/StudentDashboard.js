// StudentDashboard.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { enrollCourse, removeEnrollment } from '../redux/actions';

const StudentDashboard = () => {
  const allCourses = useSelector((state) => state.allCourses);
  const enrolledCourses = useSelector((state) => state.enrolledCourses);
  const dispatch = useDispatch();

  const enrollInCourse = (course) => {
    dispatch(enrollCourse(course));
  };

  const removeFromEnrolledCourses = (courseId) => {
    dispatch(removeEnrollment(courseId));
  };

  return (
    <div>
      <h1>Student Dashboard</h1>
      <h2>Enrolled Courses</h2>
      <ul>
        {enrolledCourses.map((course) => (
          <li key={course.id}>
            <h3>{course.name}</h3>
            <p>Instructor: {course.instructor}</p>
            <p>Status: {course.enrollmentStatus}</p>
            <button onClick={() => removeFromEnrolledCourses(course.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      <h2>All Courses</h2>
      <ul>
        {allCourses.map((course) => (
          <li key={course.id}>
            <h3>{course.name}</h3>
            <p>Instructor: {course.instructor}</p>
            <p>Status: {course.enrollmentStatus}</p>
            <button onClick={() => enrollInCourse(course)} disabled={enrolledCourses.some((enrolledCourse) => enrolledCourse.id === course.id)}>
              {enrolledCourses.some((enrolledCourse) => enrolledCourse.id === course.id) ? 'Enrolled' : 'Enroll'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
