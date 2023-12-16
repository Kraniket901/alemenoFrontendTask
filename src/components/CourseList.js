import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import courseModel from '../courseModel'; // Update the path accordingly

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch courses from courseModel (dummy data)
    setCourses(courseModel); // Replace with actual data
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    // Filter courses based on search term for name or instructor
    const filteredCourses = courseModel.filter(
      (course) =>
        course.name.toLowerCase().includes(term) ||
        course.instructor.toLowerCase().includes(term)
    );
    setCourses(filteredCourses);
    setSearchTerm(term);
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
