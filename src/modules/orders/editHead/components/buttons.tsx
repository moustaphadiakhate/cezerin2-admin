import { Divider, IconButton, MenuItem } from "@material-ui/core"
import IconMenu from "material-ui/IconMenu"
import React, { useState } from "react"
import messages from "../../../../lib/text"
import ConfirmationDialog from "../../../../modules/shared/confirmation"
import DeleteConfirmation from "../../../../modules/shared/deleteConfirmation"
import ProductSearchDialog from "../../../../modules/shared/productSearch"
const Buttons = props => {
  const [showClose, setShowClose] = useState(false)
  const [showCancel, setShowCancel] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)
  const [showAddItem, setShowAddItem] = useState(false)

  const setClosed = () => {
    setShowClose(false)
    props.setClosed(props.order.id)
  }

  const setCancelled = () => {
    setShowCancel(true)
    props.setCancelled(props.order.id)
  }

  const deleteOrder = () => {
    setShowClose(false)
    props.onDelete()
  }

  const holdOrder = () => {
    props.holdOrder(props.order.id)
  }

  const resumeOrder = () => {
    props.resumeOrder(props.order.id)
  }

  const addItem = productId => {
    setShowAddItem(false)
    props.addItem(props.order.id, productId)
  }

  const { settings, order, onDelete } = props

  if (order) {
    const orderName = `${messages.order} #${order.number}`

    const menuItems = []
    if (order.closed) {
      //
    } else if (order.cancelled) {
      //
    } else {
      menuItems.push(
        <MenuItem key="addItem" onClick={() => setShowAddItem(true)}>
          {messages.addOrderItem}
        </MenuItem>
      )
      menuItems.push(<Divider key="dev1" />)
      if (order.hold) {
        menuItems.push(
          <MenuItem key="resume" onClick={resumeOrder}>
            {messages.resumeOrder}
          </MenuItem>
        )
      } else {
        menuItems.push(
          <MenuItem key="hold" onClick={holdOrder}>
            {messages.holdOrder}
          </MenuItem>
        )
      }
      menuItems.push(
        <MenuItem key="close" onClick={() => setShowClose(true)}>
          {messages.closeOrder}
        </MenuItem>
      )
      menuItems.push(
        <MenuItem key="cancel" onClick={() => setShowCancel(true)}>
          {messages.cancelOrder}
        </MenuItem>
      )
    }

    return (
      <span>
        <ProductSearchDialog
          open={() => setShowAddItem(true)}
          title={messages.addOrderItem}
          settings={settings}
          onSubmit={addItem}
          onCancel={() => setShowAddItem(false)}
          submitLabel={messages.add}
          cancelLabel={messages.cancel}
        />

        <ConfirmationDialog
          open={() => setShowClose(true)}
          title={orderName}
          description={messages.closeOrderConfirmation}
          onSubmit={setClosed}
          onCancel={() => setShowClose(false)}
          submitLabel={messages.closeOrder}
          cancelLabel={messages.cancel}
        />

        <ConfirmationDialog
          open={() => setShowCancel(true)}
          title={orderName}
          description={messages.cancelOrderConfirmation}
          onSubmit={setCancelled}
          onCancel={() => setShowCancel(false)}
          submitLabel={messages.cancelOrder}
          cancelLabel={messages.cancel}
        />

        <DeleteConfirmation
          open={openDelete}
          isSingle
          itemsCount={1}
          itemName={orderName}
          onCancel={() => setShowClose(false)}
          onDelete={deleteOrder}
        />

        <IconMenu
          iconButtonElement={
            <IconButton touch>
              <MoreVert color="primary" className="material-icons" />
            </IconButton>
          }
          targetOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "top" }}
        >
          {menuItems}
          <MenuItem onClick={openDelete}>{messages.deleteOrder}</MenuItem>
        </IconMenu>
      </span>
    )
  }
  return <span />
}

export default Buttons
