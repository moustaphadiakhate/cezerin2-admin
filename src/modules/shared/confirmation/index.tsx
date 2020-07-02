import { Button, Dialog, DialogActions } from "@material-ui/core"
import React, { useEffect, useState } from "react"

const ConfirmationDialog = (
  props: Readonly<{
    title
    description
    submitLabel
    cancelLabel
    modal
    onCancel
    onSubmit
    open
  }>
) => {
  const [open, setOpen] = useState(props.open)

  const {
    title,
    description,
    submitLabel,
    cancelLabel,
    modal = false,
    onCancel,
    onSubmit,
  } = props

  useEffect(() => {
    setOpen(props.open)
  }, [props.open])

  const handleCancel = () => {
    setOpen(false)
    if (onCancel) {
      onCancel()
    }
  }

  const handleSubmit = () => {
    setOpen(false)
    if (onSubmit) {
      onSubmit()
    }
  }

  return (
    <Dialog
      title={title}
      modal={modal}
      open={open}
      onRequestClose={handleCancel}
    >
      <div style={{ wordWrap: "break-word" }}>{description}</div>
      <DialogActions>
        <Button onClick={handleCancel} style={{ marginRight: 10 }}>
          {cancelLabel}
        </Button>
        <Button color="primary" onClick={handleSubmit}>
          {submitLabel}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmationDialog
