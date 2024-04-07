import { useState } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PhonebookEntry from './components/PhonebookEntry'

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
            <Filter search={searchQuery} handleChange={handleSearchChange}/>
          </div>
        </form>
      <h2>Add a new entry</h2>
        <PhonebookEntry name={newName} number={newNumber} addName={addName} handleName={handleNameChange} handleNumber={handleNumberChange} />
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