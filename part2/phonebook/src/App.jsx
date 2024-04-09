import { useState, useEffect } from 'react'
import Notification from './components/Notification'
import Person from './components/Person'
import Filter from './components/Filter'
import PhonebookEntry from './components/PhonebookEntry'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [errorMessage, setErrorMessage] = useState('')


  useEffect(() => {
    personsService
      .getAll()
      .then(existingPhonebook => {
        setPersons(existingPhonebook)
      })
  }, [])

  const removeEntry = id => {
    const person = persons.find(n => n.id === id)
    const isConfirmed = window.confirm(`Delete ${person.name} ?`)

    if (isConfirmed) {
     personsService
      .remove(person.id)
      .then(response => {
        personsService
        .getAll()
        .then(existingPhonebook => {
          setPersons(existingPhonebook)
        })
      })
      .catch(error => {
        setErrorMessage(`Information of ${person.name} has already been removed from server`)
        setPersons(persons.filter(n => n.id !== id))
        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
      })
    }
  }

  const addName = (event) => {
    event.preventDefault()
    const personObj = {
      name: newName,
      number: newNumber
    }
    
    if (!persons.some(obj => obj.name === personObj.name)) {
      personsService
      .create(personObj)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        setErrorMessage(`Added ${returnedPerson.name}`)
        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
      })
      .catch(error => {
        setErrorMessage(error.response.data.error)
        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
      })
    } else {
      const person = persons.find(obj => obj.name === personObj.name)
      const isConfirmed = window.confirm(`${personObj.name} is already added to phonebook, replace their old number with the new one?`)
      if (isConfirmed) {
        personsService
        .update(person.id, personObj)
        .then(response => {
          personsService
          .getAll()
          .then(existingPhonebook => {
            setPersons(existingPhonebook)
            setErrorMessage(`Updated ${personObj.name}`)
            setTimeout(() => {
              setErrorMessage(null);
            }, 3000);
          })
        })
      }
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
      <Notification message={errorMessage} />
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
            <Person key={person.name} person={person} deleteEntry={()=>removeEntry(person.id)}/>
          )}
        </ul>
    </div>
  )
}

export default App