
import React from 'react'

function CommonSelect({options}) {
  return (
    <div>
      <select>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CommonSelect
