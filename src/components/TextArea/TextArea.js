import React from "react"
import styles from "./../ToastPlayground/ToastPlayground.module.css"

function TextArea({ message, setMessage, ...props }, ref) {
  const id = React.useId()

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
