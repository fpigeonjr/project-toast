import React from "react"
import styles from "./../ToastPlayground/ToastPlayground.module.css"
import { ToastContext } from "../ToastProvider/ToastProvider"

function TextArea({ ...props }, ref) {
  const id = React.useId()
  const { message, setMessage } = React.useContext(ToastContext)

  return (
    <>
      <label
        htmlFor={`message-${id}`}
        className={styles.label}
        style={{ alignSelf: "baseline" }}
      >
        Message
      </label>
      <div className={styles.inputWrapper}>
        <textarea
          {...props}
          id={`message-${id}`}
          className={styles.messageInput}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          ref={ref}
        />
      </div>
    </>
  )
}

export default React.forwardRef(TextArea)
