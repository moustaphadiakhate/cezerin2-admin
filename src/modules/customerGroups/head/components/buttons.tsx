import { Add, Delete } from "@material-ui/icons"
import IconButton from "material-ui/IconButton"
import React, { useState } from "react"
import messages from "../../../../lib/text"
import DeleteConfirmation from "../../../../modules/shared/deleteConfirmation"

const Buttons = (props: Readonly<{ selected; onDelete; onCreate }>) => {
  const [openDelete, setOpenDelete] = useState(false)

  const { selected, onDelete, onCreate } = props

  const deleteGroup = () => {
    setOpenDelete(false)
    onDelete(selected.id)
  }
  const groupName =
    selected && selected.name && selected.name.length > 0
      ? selected.name
      : "Draft"

  return (
    <span>
      {selected && (
        <>
          <IconButton
            touch
            tooltip={messages.actions_delete}
            tooltipPosition="bottom-left"
            onClick={() => setOpenDelete(true)}
          >
            <Delete color="primary" className="material-icons" />
          </IconButton>
          <DeleteConfirmation
            open={openDelete}
            isSingle
            itemsCount={1}
            itemName={groupName}
            onCancel={() => setOpenDelete(false)}
            onDelete={deleteGroup}
          />
        </>
      )}
      <IconButton
        touch
        tooltipPosition="bottom-left"
        tooltip={messages.customerGroups_titleAdd}
        onClick={onCreate}
      >
        <Add color="primary" className="material-icons" />
      </IconButton>
    </span>
  )
}

export default Buttons
