import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import StudentDashboard from './components/StudentDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={CourseList} />
        <Route path="/course/:id" component={CourseDetails} />
        <Route path="/dashboard" component={StudentDashboard} />
      </Routes>
    </Router>
  );
}

export default App;