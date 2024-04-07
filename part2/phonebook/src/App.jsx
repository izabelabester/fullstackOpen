import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObj = {
      name: newName,
      number: newNumber
    }
    
    if (!persons.some(obj => obj.name === nameObj.name)) {
      setPersons(persons.concat(nameObj))
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${nameObj.name} is already added to phonebook`)
    }
  }

  const filteredData = persons.filter(entry => 
    entry.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div>

      <h2>Phonebook</h2>
      <form>
        <div> filter entries by: 
          <input 
            type="text"
            placeholder="search query"
            value={searchQuery} 
            onChange={handleSearchChange}/>
            {/* <Filter searchQuery={searchQuery} onChange={handleSearchChange}/> */}
        </div>
      </form>

      <h2>Add a new entry</h2>
      <form onSubmit={addName}>
        <div> name: 
          <input value={newName} onChange={handleNameChange}/>
        </div>
        <div> number: 
          <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {filteredData.map(person => 
          <Person key={person.name} person={person} />
        )}
       </ul>

    </div>
  )
}

export default App