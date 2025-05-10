const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {

  console.log(props)
  return (
    <div>
      {props.name} {props.exercises}
    </div>
  )
}

const Content = (props) => {

  console.log(props)
  return (
    <div>
      {props.items.map((value, index) => (
        <Part key={index} name={value.name} exercises={value.exercises} />
      ))}
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  let totalExercises = 0;
  props.total.forEach((part) => {
    totalExercises += part.exercises;
  });
  return (
    <div>
      <p>
        Number of exercises {totalExercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content items={course.parts} />
      <Total total={course.parts}/>
    </div>
  )
}

export default App