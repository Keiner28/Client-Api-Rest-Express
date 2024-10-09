const FileInput = ({ label, icon: Icon, onChange, ...props }) => (
  <div>
    <label className='flex items-center text-sm font-medium text-gray-700 mb-1'>
      {Icon && <Icon />}
      <span className='ml-1'>{label}</span>
    </label>
    <input
      type='file'
      onChange={onChange}
      className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
    />
    {props.value && (
      <img
        src={props.value}
        alt='Poster'
        className='mt-2 w-full h-48 object-cover rounded-md'
      />
    )}
    {props.touched && props.error ? <div className='text-red-500 text-sm'>{props.error}</div> : null}
  </div>
)

export default FileInput
