import { Button, Dialog, DialogActions } from "@material-ui/core"
import React, { useEffect, useState } from "react"

const ConfirmationDialog = (props: Readonly<>) => {
  const [open, setOpen] = useState(props.open)

  useEffect(() => {
    setOpen(props.open)
  }, [props.open])

  const handleCancel = () => {
    setOpen(false)
    if (props.onCancel) {
      props.onCancel()
    }
  }

  const handleSubmit = () => {
    setOpen(false)
    if (props.onSubmit) {
      props.onSubmit()
    }
  }

  const { title, description, submitLabel, cancelLabel, modal = false } = props

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
