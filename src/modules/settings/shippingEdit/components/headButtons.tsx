import { IconButton } from "@material-ui/core"
import { Delete } from "@material-ui/icons"
import React, { useState } from "react"
import messages from "../../../../lib/text"
import DeleteConfirmation from "../../../../modules/shared/deleteConfirmation"
const Buttons = props => {
  const [openDelete, setOpenDelete] = useState(false)

  const deleteGroup = () => {
    setOpenDelete(false)
    props.onDelete(props.shippingMethod.id)
  }

  const { shippingMethod, onDelete } = props
  const methodName =
    shippingMethod && shippingMethod.name && shippingMethod.name.length > 0
      ? shippingMethod.name
      : "Draft"

  return (
    <span>
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
        itemName={methodName}
        onCancel={() => setOpenDelete(false)}
        onDelete={deleteGroup}
      />
    </span>
  )
}

export default Buttons
