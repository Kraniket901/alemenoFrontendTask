import React from 'react';
import { useParams, Link } from 'react-router-dom';
import courseModel from '../courseModel';

const CourseDetails = () => {
  const { id } = useParams();
  const course = courseModel; // Replace with actual course data fetched from API

  return (
    <div>
      <h1>Course Details Page</h1>
      <h2>{course.name}</h2>
      <p>Instructor: {course.instructor}</p>
      {/* Display other course details based on the assignment */}
      <Link to="/">Back to Course List</Link>
    </div>
  );
};

export default CourseDetails;
