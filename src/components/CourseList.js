import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { enrollCourse, removeEnrollment } from '../redux/actions';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const allCourses = useSelector((state) => state.allCourses);
  const enrolledCourses = useSelector((state) => state.enrolledCourses);

  useEffect(() => {
    // Fetch courses from courseModel (dummy data)
    setCourses(allCourses); // Use courses from Redux store
  }, [allCourses]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    // Filter courses based on search term for name or instructor
    const filteredCourses = allCourses.filter(
      (course) =>
        course.name.toLowerCase().includes(term) ||
        course.instructor.toLowerCase().includes(term)
    );
    setCourses(filteredCourses);
    setSearchTerm(term);
  };

  const isCourseEnrolled = (courseId) => {
    return enrolledCourses.some((course) => course.id === courseId);
  };

  const handleEnrollToggle = (course) => {
    if (isCourseEnrolled(course.id)) {
      // Dispatch the removeEnrollment action if already enrolled
      dispatch(removeEnrollment(course.id));
    } else {
      // Dispatch the enrollCourse action if not enrolled
      dispatch(enrollCourse(course));
    }
  };

  return (
    <div>
      <h1>Course Listing Page</h1>
      <input
        type="text"
        placeholder="Search by course name or instructor"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <Link to={`/course/${course.id}`}>
              {course.name} - {course.instructor}
            </Link>
            <p>Status: {course.enrollmentStatus}</p>
            <button onClick={() => handleEnrollToggle(course)}>
              {isCourseEnrolled(course.id) ? 'Unenroll' : 'Enroll'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
