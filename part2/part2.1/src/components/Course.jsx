const Content = ({parts}) => {
    return (
      <div>
        {parts.map((part, i) => 
          <Part key={i} part = {parts[i].name} exercises = {parts[i].exercises} />)}
      </div>
    )
  }
  
  const Part = ({part, exercises}) => {
    return (
      <p>{part} {exercises}</p>
    )
  }
  
  const Header = ({course}) => {
    return (
      <h2>{course}</h2>
    )
  }
  
  const Total = ({parts}) => {
    const total = parts.reduce((s, p) => s + p.exercises, 0)
    return (
      <p style={{fontWeight: 'bold'}}>total of {total} exercises</p>
  
    )
  }

const Course = ({courses}) => {
    return (
          <div>
          {courses.map(course => 
              <>
              <Header key={course.id} course={course.name} />
              <Content key={course.parts.id} parts={course.parts} />
              <Total key={'total'} parts={course.parts} />
              </>
            )}
        </div>
      )

}

export default Course