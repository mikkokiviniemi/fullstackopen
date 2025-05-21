const Part = ({ part }) => {
  return <li>{part.name} {part.exercises}</li>
}


const Course = ({course}) => {

  return (
    <div>
      <ul>
        {course.map(part => 
          <Part key={part.id} part={part} />
        )}
      </ul>
    </div>
  )


}

export default Course