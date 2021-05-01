const SearchBar = ({ input, onChange }) => {

    function handleChange(event) {

        onChange(event.target.value)
    }
    return (

        <input value={input} onChange={handleChange} type="text" />

    )
}

export default SearchBar
