const Part = ({ part }) => {
  return <div>{part.name} {part.exercises}</div>
}

const Course = ({ course }) => {
  return (
    <div>
        {course.parts.map(part => 
          <Part key={part.id} part={part} />
        )}
    </div>
  )
}

export default Course