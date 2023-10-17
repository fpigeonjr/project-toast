import React from "react"
import Button from "../Button"
import TextArea from "../TextArea/TextArea"
import styles from "./ToastPlayground.module.css"
import RadioButton from "../RadioButton"
import ToastShelf from "../ToastShelf"
import { ToastContext } from "../ToastProvider/ToastProvider"

function ToastPlayground() {
  const { handleAddToast, VARIANT_OPTIONS, showToast, messageRef, setToasts } =
    React.useContext(ToastContext)

  React.useEffect(() => {
    messageRef.current.focus()
  }, [messageRef])

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        setToasts([])
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <header>
        <img
          alt="Cute toast mascot"
          src="/toast.png"
        />
        <h1>Toast Playground</h1>
      </header>
      {showToast && <ToastShelf />}
      <form
        className={styles.controlsWrapper}
        onSubmit={handleAddToast}
      >
        <div className={styles.row}>
          <TextArea
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
                option={option}
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
