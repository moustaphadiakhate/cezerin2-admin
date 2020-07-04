import { Dialog, DialogActions, Divider, MenuItem } from "@material-ui/core"
import FlatButton from "material-ui/FlatButton"
import IconMenu from "material-ui/IconMenu"
import SelectField from "material-ui/SelectField"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import * as helper from "../../../../../lib/helper"
import messages from "../../../../../lib/text"
import style from "../style.module.sass"

const OrderItem = props => {
  const [quantity, setQuantity] = useState(props.item.quantity)
  const [variantId, setVariantId] = useState(props.item.variant_id)
  const [selectedOptions, setSelectedOptions] = useState(getOptionsByVariant())
  const [selectedVariant, setSelectedVariant] = useState(getCurrentVariant())
  const [showEdit, setShowEdit] = useState(false)

  const showEditForm = () => {
    setShowEdit(true)
  }

  const hideEditForm = () => {
    setShowEdit(false)
  }

  const quantityChange = (event, index, value) => {
    setQuantity(value)
  }

  const submitEditForm = () => {
    hideEditForm()
    const newVariantId =
      selectedVariant && selectedVariant.id ? selectedVariant.id : variantId
    props.onItemUpdate(props.item.id, quantity, newVariantId)
  }

  const deleteItem = () => {
    props.onItemDelete(props.item.id)
  }

  const onOptionChange = (optionId, valueId) => {
    setQuantity(1)

    if (valueId === "") {
      delete selectedOptions[optionId]
    } else {
      selectedOptions[optionId] = valueId
    }

    setSelectedOptions(selectedOptions)
    findVariantBySelectedOptions()
  }

  const findVariantBySelectedOptions = () => {
    const { product } = props.item
    for (const variant of product.variants) {
      const variantMutchSelectedOptions = variant.options.every(
        variantOption =>
          selectedOptions[variantOption.option_id] === variantOption.value_id
      )
      if (variantMutchSelectedOptions) {
        setSelectedVariant(variant)
        return
      }
    }

    setSelectedVariant(null)
  }

  const getCurrentVariant = () => {
    const variantId = props.item.variant_id
    const { product } = props.item
    let variant = null

    if (
      variantId &&
      product &&
      product.variants &&
      product.variants.length > 0
    ) {
      variant = product.variants.find(v => v.id === variantId)
    }

    return variant
  }

  const getOptionsByVariant = () => {
    const variantId = props.item.variant_id
    const { product } = props.item
    const selectedOptions = {}
    if (
      variantId &&
      product &&
      product.variants &&
      product.variants.length > 0
    ) {
      const variant = product.variants.find(v => v.id === variantId)
      if (variant) {
        for (const option of variant.options) {
          selectedOptions[option.option_id] = option.value_id
        }
      }
    }

    return selectedOptions
  }

  const { item, settings, allowEdit } = props

  const { product } = item
  const price = helper.formatCurrency(item.price, settings)
  const priceTotal = helper.formatCurrency(item.price_total, settings)
  const discountTotal = helper.formatCurrency(item.discount_total, settings)
  const imageUrl =
    product && product.images && product.images.length > 0
      ? product.images[0].url
      : null
  const thumbnailUrl = helper.getThumbnailUrl(imageUrl, 100)
  const productOptions = product ? product.options : []

  let maxItems = product ? product.stock_quantity : 0
  if (selectedVariant) {
    maxItems = selectedVariant.stock_quantity
  } else if (product && product.options && product.options.length > 0) {
    // product variant not exists with this options
    maxItems = 0
  }

  const quantityItems = []
  if (maxItems === 0) {
    quantityItems.push(
      <MenuItem key={0} value={0}>
        {messages.products_outOfStock}
      </MenuItem>
    )
    quantity = 0
  } else {
    for (let i = 1; i <= maxItems, i <= 100; i++) {
      quantityItems.push(
        <MenuItem key={i} value={i} primaryText={i.toString()} />
      )
    }
  }

  return (
    <>
      <div className={`${style.item} row row--no-gutter middle-xs`}>
        <div className="col-xs-2">
          {thumbnailUrl && thumbnailUrl !== "" && (
            <img src={thumbnailUrl} className={style.itemImage} />
          )}
        </div>
        <div className={`${style.itemName} col-xs-4`}>
          <Link to={`/product/${item.product_id}`}>{item.name}</Link>
          <>{item.variant_name}</>
          <>
            {messages.products_sku}: {item.sku}
          </>
        </div>
        <div className="col-xs-2" style={{ textAlign: "right" }}>
          {price}
        </div>
        <div className="col-xs-1" style={{ textAlign: "center" }}>
          x {item.quantity}
        </div>
        <div className="col-xs-2" style={{ textAlign: "right" }}>
          {priceTotal}
          {item.discount_total > 0 && (
            <small className={style.itemDiscount}>{discountTotal}</small>
          )}
        </div>
        <div className="col-xs-1" style={{ textAlign: "center" }}>
          {allowEdit && (
            <IconMenu
              iconButtonElement={iconButtonElement}
              targetOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "top" }}
            >
              <MenuItem onClick={showEditForm}>{messages.edit}</MenuItem>
              <MenuItem onClick={deleteItem}>
                {messages.actions_delete}
              </MenuItem>
            </IconMenu>
          )}
        </div>
      </div>
      <Divider />
      <Dialog
        title={messages.editOrderItem}
        modal={false}
        open={showEdit}
        onRequestClose={hideEditForm}
        contentStyle={{ width: 400 }}
      >
        <div style={{ width: "400px", margin: "25px" }}>
          <ProductOptions
            options={productOptions}
            onChange={onOptionChange}
            selectedOptions={selectedOptions}
          />
          <SelectField
            floatingLabelText={messages.quantity}
            fullWidth
            value={quantity}
            onChange={quantityChange}
          >
            {quantityItems}
          </SelectField>
        </div>
        <DialogActions>
          <FlatButton
            label={messages.cancel}
            onClick={hideEditForm}
            style={{ marginRight: 10 }}
          />
          <FlatButton label={messages.save} primary onClick={submitEditForm} />
        </DialogActions>
      </Dialog>
    </>
  )
}

export default OrderItem
