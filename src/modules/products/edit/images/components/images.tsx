import { Button, Paper } from "@material-ui/core"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import TextField from "material-ui/TextField"
import React, { useState } from "react"
import messages from "../../../../../lib/text"
import Gallery from "../../../../../modules/shared/imageUploadMultiple"

const ProductImages = props => {
  const [openEdit, setOpenEdit] = useState(false)
  const [imageData, setImageData] = useState(null)

  const handleEditOpen = image => {
    setImageData(image)
    setOpenEdit(true)
  }

  const handleEditSave = () => {
    props.onImageUpdate(imageData)
    setOpenEdit(false)
  }

  const handleAltChange = (event, value) => {
    const newImageData = Object.assign({}, imageData, {
      alt: value,
    })
    setImageData(newImageData)
  }

  const {
    productId,
    images,
    onImageDelete,
    onImageSort,
    onImageUpload,
    uploadingImages,
  } = props

  const alt = imageData ? imageData.alt : ""

  return (
    <Paper className="paper-box" elevation={1}>
      <div style={{ padding: "10px 10px 30px 10px" }}>
        <Gallery
          productId={productId}
          images={images}
          onImageDelete={onImageDelete}
          onImageSort={onImageSort}
          onImageUpload={onImageUpload}
          uploading={uploadingImages}
          onImageEdit={handleEditOpen}
        />
        <Dialog
          contentStyle={{ maxWidth: 540 }}
          title={messages.edit}
          modal={false}
          open={openEdit}
          onRequestClose={() => setOpenEdit(false)}
          autoScrollBodyContent={false}
        >
          <div style={{ width: "500px", margin: "25px" }}>
            <TextField
              floatingLabelText={messages.alt}
              fullWidth
              value={alt}
              onChange={handleAltChange}
            />
          </div>
          <DialogActions>
            <Button
              onClick={() => setOpenEdit(false)}
              style={{ marginRight: 10 }}
            >
              {messages.cancel}
            </Button>
            <Button color="primary" keyboardFocused onClick={handleEditSave}>
              {messages.save}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Paper>
  )
}

export default ProductImages
