import React from 'react'

const Label = ({name, className, ...rest}) => {
  return (
    <label htmlFor="label" className={`font-bold text-3xl flex justify-start ${className}`}>{name}</label>
  )
}

export default Label