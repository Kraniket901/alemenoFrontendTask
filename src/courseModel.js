const courseModel = [
  {
    id: 1,
    name: 'Introduction to React Native',
    instructor: 'John Doe',
    description: 'Learn the basics of React Native development and build your first mobile app.',
    enrollmentStatus: 'Open',
    thumbnail: 'your.image.here', // Link to the course thumbnail
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'Overview of React Native, setting up your development environment.',
      },
      {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React Native components.',
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 101,
        name: 'Alice Johnson',
        email: 'alice@example.com',
      },
      {
        id: 102,
        name: 'Bob Smith',
        email: 'bob@example.com',
      },
    ],
  },
  {
    id: 2,
    name: 'Advanced JavaScript',
    instructor: 'Jane Doe',
    description: 'Deep dive into advanced JavaScript concepts.',
    enrollmentStatus: 'Open',
    thumbnail: 'your.image.here',
    duration: '6 weeks',
    schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
    location: 'Online',
    prerequisites: ['Intermediate JavaScript knowledge'],
    syllabus: [
      {
        week: 1,
        topic: 'Closures and Scope',
        content: 'Understanding closures and lexical scope.',
      },
      {
        week: 2,
        topic: 'Asynchronous JavaScript',
        content: 'Working with Promises and Async/Await.',
      },
    ],
    students: [
      {
        id: 103,
        name: 'Charlie Brown',
        email: 'charlie@example.com',
      },
      {
        id: 104,
        name: 'Diana Ross',
        email: 'diana@example.com',
      },
    ],
  },
];

export default courseModel;
