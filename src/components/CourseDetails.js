import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { enrollCourse, removeEnrollment } from '../redux/actions';

const CourseDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const allCourses = useSelector((state) => state.allCourses);
  const enrolledCourses = useSelector((state) => state.enrolledCourses);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const fetchLikes = async () => {
      const res = await fetch('http://localhost:5000/likes?id=1', {
        method: 'GET'
      });
      const result = await res.json();
      console.log(result);
      setLikes(result.likes);
    }
    fetchLikes();
  }, []);

  // Find the course by id
  const course = allCourses.find((course) => course.id === parseInt(id, 10));

  // Check if the course is not found
  if (!course) {
    return (
      <div>
        <h1>Course Not Found</h1>
        <Link to="/">Back to Course List</Link>
      </div>
    );
  }

  const isCourseEnrolled = enrolledCourses.some((enrolledCourse) => enrolledCourse.id === course.id);

  const handleEnroll = () => {
    // Dispatch the enrollCourse action if not enrolled
    dispatch(enrollCourse(course));
  };

  const handleUnenroll = () => {
    // Dispatch the removeEnrollment action if already enrolled
    dispatch(removeEnrollment(course.id));
  };

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
      <p>Status: {isCourseEnrolled ? 'Enrolled' : 'Not Enrolled'}</p>
      {isCourseEnrolled ? (
        <button onClick={handleUnenroll}>Unenroll</button>
      ) : (
        <button onClick={handleEnroll}>Enroll</button>
      )}
      <Link to="/"><p>Back to Course List</p></Link>
    </div>
  );
};

export default CourseDetails;
