import Course from './components/Course'


const Header = ({course}) => {
  console.log(course)
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

const Total = ({course}) => {
  console.log(course)
  let totalExercises = 0;
  course.total.forEach((part) => {
    totalExercises += part.exercises;
  });
  return (
    <div>
      <p>
        total of exercises {totalExercises}
      </p>
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Course course={course} />
      <Total course={course} />
    </div>
  )
}

export default App