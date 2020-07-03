import { IconButton, MenuItem, Select } from "@material-ui/core"
import { MoreVert } from "@material-ui/icons"
import React from "react"
import OrderItem from "./components/OrderItem"

const iconButtonElement = (
  <IconButton touch>
    <MoreVert color="secondary" className="material-icons" />
  </IconButton>
)

const ProductOption = ({ option, onChange, selectedOptions }) => {
  const selectedValue = selectedOptions[option.id]
  const values = option.values
    .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
    .map((value, index) => (
      <MenuItem key={index} value={value.id}>
        {value.name}
      </MenuItem>
    ))

  return (
    <Select
      label={option.name}
      fullWidth
      value={selectedValue}
      onChange={(event, index, value) => {
        onChange(option.id, value)
      }}
    >
      {values}
    </Select>
  )
}

const ProductOptions = ({ options, onChange, selectedOptions }) => {
  if (options) {
    const items = options.map((option, index) => (
      <ProductOption
        key={index}
        option={option}
        onChange={onChange}
        selectedOptions={selectedOptions}
      />
    ))
    return <div className="product-options">{items}</div>
  }
  return null
}

const OrderItems = ({ order, settings, onItemDelete, onItemUpdate }) => {
  const allowEdit = order.closed === false && order.cancelled === false
  const items = order.items.map((item, index) => (
    <OrderItem
      key={index}
      item={item}
      settings={settings}
      onItemDelete={onItemDelete}
      onItemUpdate={onItemUpdate}
      allowEdit={allowEdit}
    />
  ))
  return <>{items}</>
}

export default OrderItems
