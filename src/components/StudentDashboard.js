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
    // Simulating enrolling in a course
    // In a real application, you'd make a request to your server to update enrollment status
    // axios.post('your_enrollment_api', { courseId });

    // Simulated logic (replace with actual logic)
    const updatedCourses = allCourses.map((course) => {
      if (course.id === courseId) {
        return { ...course, enrollmentStatus: 'Enrolled' };
      }
      return course;
    });

    setEnrolledCourses((prevEnrolledCourses) => [
      ...prevEnrolledCourses,
      ...updatedCourses.filter((course) => course.id === courseId),
    ]);
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
            <button onClick={() => enrollInCourse(course.id)} disabled={course.enrollmentStatus === 'Enrolled'}>
              Enroll
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
