function SearchInput({ onChange }) {
  return (
    <input
      type='text'
      aria-label='Buscar'
      placeholder='Buscar...'
      className='border rounded px-4 py-2 mr-2'
      onChange={onChange}
    />
  )
}

export default SearchInput
