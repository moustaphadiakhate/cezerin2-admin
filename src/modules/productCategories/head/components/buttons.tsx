import { Button, Dialog, DialogActions, IconButton } from "@material-ui/core"
import {
  Add,
  ArrowDownward,
  ArrowUpward,
  Delete,
  Folder,
} from "@material-ui/icons"
import React, { useState } from "react"
import messages from "../../../../lib/text"
import CategorySelect from "../../../../modules/productCategories/select"
import DeleteConfirmation from "../../../../modules/shared/deleteConfirmation"

const Buttons = props => {
  const [categoryIdMoveTo, setCategoryIdMoveTo] = useState("root")
  const [openMoveTo, setOpenMoveTo] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)

  const { selected, onMoveUp, onMoveDown, onDelete, onCreate } = props

  const deleteCategory = () => {
    setOpenDelete(false)
    onDelete(props.selected.id)
  }

  const saveMoveTo = () => {
    setOpenMoveTo(false)
    props.onMoveTo(categoryIdMoveTo)
  }

  const categoryName =
    selected && selected.name && selected.name.length > 0
      ? selected.name
      : "Draft"

  return (
    <span>
      {selected && (
        <>
          <IconButton
            touch
            tooltipPosition="bottom-left"
            tooltip={messages.actions_moveUp}
            onClick={onMoveUp}
          >
            <ArrowUpward color="primary" className="material-icons" />
          </IconButton>
          <IconButton
            touch
            tooltipPosition="bottom-left"
            tooltip={messages.actions_moveDown}
            onClick={onMoveDown}
          >
            <ArrowDownward color="primary" className="material-icons" />
          </IconButton>
          <IconButton
            touch
            tooltipPosition="bottom-left"
            tooltip={messages.actions_delete}
            onClick={() => setOpenDelete(true)}
          >
            <Delete color="primary" className="material-icons" />
          </IconButton>
          <IconButton
            touch
            tooltipPosition="bottom-left"
            tooltip={messages.actions_moveTo}
            onClick={() => setOpenMoveTo(true)}
          >
            <Folder color="primary" className="material-icons" />
          </IconButton>
          <Dialog
            title={messages.actions_moveTo}
            modal={false}
            open={openMoveTo}
            onRequestClose={() => setOpenMoveTo(false)}
            autoScrollBodyContent
          >
            <CategorySelect
              onSelect={groupID => setCategoryIdMoveTo(groupID)}
              selectedId={categoryIdMoveTo}
              showRoot
              showAll={false}
            />
            <DialogActions>
              <Button
                onClick={() => setOpenMoveTo(false)}
                style={{ marginRight: 10 }}
              >
                {messages.cancel}
              </Button>
              <Button color="primary" keyboardFocused onClick={saveMoveTo}>
                {messages.actions_moveHere}
              </Button>
            </DialogActions>
          </Dialog>
          <DeleteConfirmation
            open={openDelete}
            isSingle
            itemsCount={1}
            itemName={categoryName}
            onCancel={() => setOpenDelete(false)}
            onDelete={deleteCategory}
          />
        </>
      )}
      <IconButton
        touch
        tooltipPosition="bottom-left"
        tooltip={messages.productCategories_titleAdd}
        onClick={onCreate}
      >
        <Add color="primary" className="material-icons" />
      </IconButton>
    </span>
  )
}

export default Buttons
