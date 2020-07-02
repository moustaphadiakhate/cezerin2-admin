import { Checkbox, List, ListItem, TextField } from "@material-ui/core"
import Toggle from "material-ui/Toggle"
import React, { useEffect, useState } from "react"

export const CustomToggle = ({
  input,
  label,
  className = "",
  disabled = false,
  style,
}: {
  input
  label
  className
  disabled
  style
}) => (
  <Toggle
    label={label}
    toggled={!!input.value}
    onToggle={(event, isInputChecked) => {
      input.onChange(isInputChecked)
    }}
    className={className}
    disabled={disabled}
    style={style}
  />
)

export const NumberField = ({ input, label, disabled = false }) => (
  <TextField
    floatingLabelText={label}
    fullWidth
    disabled={disabled}
    value={input.value}
    type="number"
    onChange={(event, value) => {
      let number = parseFloat(value)
      number = number || 0
      input.onChange(number)
    }}
  />
)

export const ColorField = ({ input }: { input }) => (
  <input {...input} type="color" />
)

export const MultiSelect = props => {
  const values = Array.isArray(props.input.value) ? props.input.value : []

  const [selectedItems, setSelectedItems] = useState(values)

  useEffect(() => {
    const values = Array.isArray(props.input.value) ? props.input.value : []
    if (values !== selectedItems) {
      selectedItems(values)
    }
  }, [])

  const onCheckboxChecked = item => {
    let newSelectedItems = []
    if (selectedItems.includes(item)) {
      newSelectedItems = selectedItems.filter(i => i !== item)
    } else {
      newSelectedItems = [...selectedItems, item]
    }
    newSelectedItems.sort()
    setSelectedItems(newSelectedItems)
    props.input.onChange(newSelectedItems)
  }

  const isCheckboxChecked = item => selectedItems.includes(item)

  const { items, disabled, columns = 2 } = props
  const columnsClass = 12 / columns

  const elements = items.map((item, index) => (
    <div className={`col-xs-12 col-sm-${columnsClass}`} key={index}>
      {item && item !== "" && (
        <ListItem>
          <Checkbox
            checked={isCheckboxChecked(item)}
            disabled={disabled}
            onCheck={() => {
              onCheckboxChecked(item)
            }}
          />
          {item}
        </ListItem>
      )}
    </div>
  ))

  return (
    <List>
      <div className="row">{elements}</div>
    </List>
  )
}
