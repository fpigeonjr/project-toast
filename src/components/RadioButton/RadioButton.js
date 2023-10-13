import React from "react"
import { ToastContext } from "../ToastProvider"

function RadioButton({ option }) {
  const id = React.useId()
  const { variant, setVariant } = React.useContext(ToastContext)

  return (
    <label htmlFor={`variant-${id}`}>
      <input
        id={`variant-${id}`}
        type="radio"
        name="variant"
        value={option}
        checked={option === variant}
        onChange={(e) => setVariant(e.target.value)}
      />
      {option}
    </label>
  )
}

export default RadioButton
