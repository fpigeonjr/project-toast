import React from "react"

function RadioButton({ variant, setValue, value, ...props }) {
  const id = React.useId()

  return (
    <label htmlFor={`variant-${id}`}>
      <input
        {...props}
        id={`variant-${id}`}
        type="radio"
        name="variant"
        value={variant}
        checked={value === variant}
        onChange={(e) => setValue(e.target.value)}
      />
      {variant}
    </label>
  )
}

export default RadioButton
