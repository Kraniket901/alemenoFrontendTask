import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch courses from the dummy API or Firebase
    axios.get('your_api_endpoint').then((response) => {
      setCourses(response.data);
    });
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Implement search logic based on course name and instructor
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