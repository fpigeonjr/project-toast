import React from "react"
import Button from "../Button"
import TextArea from "../TextArea/TextArea"
import styles from "./ToastPlayground.module.css"
import RadioButton from "../RadioButton"
import ToastShelf from "../ToastShelf"

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"]
const initialToast = [
  {
    id: 112387,
    message: "Example notice toast",
    variant: VARIANT_OPTIONS[0]
  },
  {
    id: 212381,
    message: "Example error toast",
    variant: VARIANT_OPTIONS[3]
  }
]
function ToastPlayground() {
  const [variant, setVariant] = React.useState("")
  const [message, setMessage] = React.useState("")
  const [showToast, setShowToast] = React.useState(false)
  const [toasts, setToasts] = React.useState(initialToast)
  const messageRef = React.useRef()

  function handleDismiss(id) {
    const newToasts = toasts.filter((toast) => toast.id !== id)
    setToasts(newToasts)
  }

  function cleanupForm() {
    setMessage("")
    setVariant("")
  }

  function handleAddToast(e) {
    e.preventDefault()
    setShowToast(true)
    const newToast = {
      id: crypto.randomUUID(),
      message,
      variant
    }
    setToasts([...toasts, newToast])
    cleanupForm()
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img
          alt="Cute toast mascot"
          src="/toast.png"
        />
        <h1>Toast Playground</h1>
      </header>
      {showToast && (
        <ToastShelf
          toasts={toasts}
          handleDismiss={handleDismiss}
        />
      )}
      <form
        className={styles.controlsWrapper}
        onSubmit={handleAddToast}
      >
        <div className={styles.row}>
          <TextArea
            message={message}
            setMessage={setMessage}
            required={true}
            ref={messageRef}
          />
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => (
              <RadioButton
                key={option}
                variant={option}
                value={variant}
                setValue={setVariant}
                required
              />
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ToastPlayground
