import React from 'react';
import { useParams, Link } from 'react-router-dom';
import courseModel from '../courseModel'; // Update the path accordingly

const CourseDetails = () => {
  const { id } = useParams();
  const course = courseModel.find((course) => course.id === parseInt(id, 10)); // Find the course by id

  // Check if the course is not found
  if (!course) {
    return (
      <div>
        <h1>Course Not Found</h1>
        <Link to="/">Back to Course List</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Course Details Page</h1>
      <h2>{course.name}</h2>
      <p>Instructor: {course.instructor}</p>
      <p>Description: {course.description}</p>
      <p>Enrollment Status: {course.enrollmentStatus}</p>
      <p>Duration: {course.duration}</p>
      <p>Schedule: {course.schedule}</p>
      <p>Location: {course.location}</p>
      <p>Prerequisites: {course.prerequisites.join(', ')}</p>
      <h3>Syllabus:</h3>
      <ul>
        {course.syllabus.map((week) => (
          <li key={week.week}>
            <strong>Week {week.week}:</strong> {week.topic} - {week.content}
          </li>
        ))}
      </ul>
      <h3>Students:</h3>
      <ul>
        {course.students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.email}
          </li>
        ))}
      </ul>
      <Link to="/">Back to Course List</Link>
    </div>
  );
};

export default CourseDetails;
