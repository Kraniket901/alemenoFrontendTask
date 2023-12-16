import React, { useState, useEffect } from 'react';
import courseModel from '../courseModel';

const StudentDashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    // Fetch enrolled courses from the backend
    // Implement the logic to get enrolled courses based on user
    // axios.get('your_enrollment_api').then((response) => {
    //   setEnrolledCourses(response.data);
    // });
    setEnrolledCourses(courseModel.students); // Replace with actual data
  }, []);

  const markAsCompleted = (courseId) => {
    // Implement logic to mark a course as completed
    // axios.post('mark_as_completed_api', { courseId });
  };

  return (
    <div>
      <h1>Student Dashboard</h1>
      <ul>
        {enrolledCourses.map((course) => (
          <li key={course.id}>
            <h3>{course.name}</h3>
            <p>Instructor: {course.instructor}</p>
            {/* Display other course details based on the assignment */}
            <button onClick={() => markAsCompleted(course.id)}>
              Mark as Completed
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
