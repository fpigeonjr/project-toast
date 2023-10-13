import React from "react"
export const ToastContext = React.createContext()
function ToastProvider({ children }) {
  const [variant, setVariant] = React.useState("")
  const [message, setMessage] = React.useState("")
  const [showToast, setShowToast] = React.useState(false)
  const [toasts, setToasts] = React.useState([])
  const messageRef = React.useRef()
  const VARIANT_OPTIONS = ["notice", "warning", "success", "error"]

  function handleDismiss(id) {
    const newToasts = toasts.filter((toast) => toast.id !== id)
    setToasts(newToasts)
  }

  function cleanupForm() {
    setMessage("")
    setVariant(VARIANT_OPTIONS[0])
    messageRef.current.focus()
  }

  function handleAddToast(e) {
    e.preventDefault()
    setShowToast(true)
    const newToast = {
      id: crypto.randomUUID(),
      message,
      variant
    }
    const nextToasts = [...toasts, newToast]
    setToasts(nextToasts)
    cleanupForm()
  }

  const value = {
    handleAddToast,
    handleDismiss,
    VARIANT_OPTIONS,
    showToast,
    message,
    setMessage,
    toasts,
    setToasts,
    variant,
    setVariant,
    messageRef
  }
  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}

export default ToastProvider
