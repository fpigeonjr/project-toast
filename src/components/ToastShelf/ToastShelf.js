import React from "react"

import Toast from "../Toast"
import styles from "./ToastShelf.module.css"

function ToastShelf({ toasts, handleDismiss }) {
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
