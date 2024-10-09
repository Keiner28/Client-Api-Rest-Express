import { Select, SelectItem } from '@nextui-org/react'

const SelectInput = ({ label, options, ...props }) => (
  <div>
    <label className='flex items-center text-sm font-medium text-gray-700 mb-1'>{label}</label>
    <Select
      {...props}
      className='w-full'
      aria-label='Seleccionar género'
      selectionMode='multiple'
      selectedKeys={props.value}
      onSelectionChange={e => props.setFieldValue(props.name, Array.from(e))}>
      {options.map(option => (
        <SelectItem
          aria-label='Género'
          key={option}>
          {option}
        </SelectItem>
      ))}
    </Select>
    {props.touched && props.error ? <div className='text-red-500 text-sm'>{props.error}</div> : null}
  </div>
)

export default SelectInput
