const Filter = ({search, handleChange}) => {
    return (
        <input 
        type="text"
        placeholder="search query"
        value={search} 
        onChange={handleChange}/>
    )
  }

export default Filter