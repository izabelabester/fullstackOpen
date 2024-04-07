const PhonebookEntry = ({name, number, handleName, handleNumber, addName}) => {
    return (
      <div>
        <form onSubmit={addName}>
            <div> name: 
                <input value={name} onChange={handleName}/>
            </div>
            <div> number: 
                <input value={number} onChange={handleNumber}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
      </form>
      </div>
    )
  }

export default PhonebookEntry
