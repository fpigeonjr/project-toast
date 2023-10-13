import React from "react"

import Toast from "../Toast"
import styles from "./ToastShelf.module.css"
import { ToastContext } from "../ToastProvider/ToastProvider"

function ToastShelf() {
  const { toasts, handleDismiss } = React.useContext(ToastContext)
  return (
    <ol className={styles.wrapper}>
      <li className={styles.toastWrapper}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            variant={toast.variant}
            handleDismiss={() => handleDismiss(toast.id)}
          />
        ))}
      </li>
    </ol>
  )
}

export default ToastShelf
