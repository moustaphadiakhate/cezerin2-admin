import { IconButton, Paper } from "@material-ui/core"
import { Create, Delete } from "@material-ui/icons"
import React from "react"
import messages from "../../../lib/text"
import style from "./style.css"

const GalleryItem = ({ url, alt, id, onDelete, onImageEdit }) => (
  <Paper elevation={1} rounded={false}>
    <div className={style.preview}>
      <img src={url} title={alt} />
    </div>
    <div className={style.footer}>
      <IconButton
        touch
        tooltip={messages.edit}
        tooltipPosition="top-right"
        onClick={onImageEdit}
      >
        <Create color="primary" className="material-icons" />
      </IconButton>
      <IconButton
        touch
        tooltip={messages.actions_delete}
        tooltipPosition="top-right"
        onClick={() => {
          onDelete(id)
        }}
      >
        <Delete color="primary" className="material-icons" />
      </IconButton>
    </div>
  </Paper>
)

export default GalleryItem
