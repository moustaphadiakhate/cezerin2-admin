import { IconButton } from "@material-ui/core"
import { Delete } from "@material-ui/icons"
import React, { useState } from "react"
import messages from "../../../../../lib/text"
import DeleteConfirmation from "../../../../../modules/shared/deleteConfirmation"

const Buttons = (props: Readonly<{ webhook; onDelete }>) => {
  const { webhook, onDelete } = props

  const [openDelete, setOpenDelete] = useState(false)
  const deletePage = () => {
    setOpenDelete(false)
    onDelete(webhook.id)
  }

  const webhookName =
    webhook && webhook.url && webhook.url.length > 0 ? webhook.url : "Draft"

  if (webhook) {
    return (
      <>
        <IconButton
          touch
          tooltipPosition="bottom-left"
          tooltip={messages.actions_delete}
          onClick={() => setOpenDelete(true)}
        >
          <Delete color="primary" className="material-icons" />
        </IconButton>
        <DeleteConfirmation
          open={openDelete}
          isSingle
          itemsCount={1}
          itemName={webhookName}
          onCancel={() => setOpenDelete(false)}
          onDelete={deletePage}
        />
      </>
    )
  }
  return null
}

export default Buttons
