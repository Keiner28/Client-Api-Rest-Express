function GenreFilter({ genres, onChange }) {
  return (
    <select
      className='border rounded px-4 py-2'
      onChange={onChange}
      aria-label='Género'>
      <option value=''>Todos</option>
      {genres.map(genre => (
        <option
          key={genre}
          value={genre}>
          {genre}
        </option>
      ))}
    </select>
  )
}

export default GenreFilter
