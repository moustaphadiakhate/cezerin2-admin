import FontIcon from "material-ui/FontIcon"
import IconButton from "material-ui/IconButton"
import MenuItem from "material-ui/MenuItem"
import SelectField from "material-ui/SelectField"
import React from "react"
import OrderItem from "./components/OrderItem"

const iconButtonElement = (
  <IconButton touch>
    <FontIcon color="rgb(189, 189, 189)" className="material-icons">
      more_vert
    </FontIcon>
  </IconButton>
)

const ProductOption = ({ option, onChange, selectedOptions }) => {
  const selectedValue = selectedOptions[option.id]
  const values = option.values
    .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
    .map((value, index) => (
      <MenuItem key={index} value={value.id} primaryText={value.name} />
    ))

  return (
    <SelectField
      floatingLabelText={option.name}
      fullWidth
      value={selectedValue}
      onChange={(event, index, value) => {
        onChange(option.id, value)
      }}
    >
      {values}
    </SelectField>
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
