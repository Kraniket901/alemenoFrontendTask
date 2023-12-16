import React, { useState, useEffect } from 'react';
import courseModel from '../courseModel'; // Update the path accordingly

const StudentDashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    // Simulating fetching all courses from the backend
    // In a real application, you'd fetch this data from your server
    // axios.get('your_courses_api').then((response) => {
    //   setAllCourses(response.data);
    // });

    // Simulated data (replace with actual data fetching logic)
    setAllCourses(courseModel);
  }, []);

  const enrollInCourse = (courseId) => {
    // Check if the course is already enrolled
    if (enrolledCourses.some((course) => course.id === courseId)) {
      alert('You are already enrolled in this course.');
      return;
    }

    // Simulating enrolling in a course
    // In a real application, you'd make a request to your server to update enrollment status
    // axios.post('your_enrollment_api', { courseId });

    // Simulated logic (replace with actual logic)
    const enrolledCourse = allCourses.find((course) => course.id === courseId);
    setEnrolledCourses((prevEnrolledCourses) => [...prevEnrolledCourses, enrolledCourse]);
  };

  const removeFromEnrolledCourses = (courseId) => {
    // Simulating removing from enrolled courses
    // In a real application, you'd make a request to your server to update enrollment status
    // axios.post('your_remove_enrollment_api', { courseId });

    // Simulated logic (replace with actual logic)
    setEnrolledCourses((prevEnrolledCourses) => prevEnrolledCourses.filter((course) => course.id !== courseId));
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
            <button onClick={() => enrollInCourse(course.id)} disabled={enrolledCourses.some((enrolledCourse) => enrolledCourse.id === course.id)}>
              {enrolledCourses.some((enrolledCourse) => enrolledCourse.id === course.id) ? 'Enrolled' : 'Enroll'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
