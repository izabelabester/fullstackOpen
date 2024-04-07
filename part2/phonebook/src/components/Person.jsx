const Person = ({ person, deleteEntry }) => {
    return (
      <>
      <li>{person.name} {person.number}</li>
      <button onClick={() => {deleteEntry(person.id)}}> delete</button>
      </>
    )
  }

export default Person