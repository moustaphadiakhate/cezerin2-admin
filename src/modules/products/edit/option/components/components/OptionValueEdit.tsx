import { IconButton } from "@material-ui/core"
import { Delete } from "@material-ui/icons"
import React, { useState } from "react"
import messages from "../../../../../../lib/text"
import style from "../style.module.sass"

const OptionValueEdit = props => {
  const [value, setValue] = useState(props.value.name)

  const onBlur = e => {
    props.onChange(props.value.id, value)
  }

  const onDelete = () => {
    props.onDelete(props.value.id)
  }

  return (
    <div className={style.gridRow}>
      <div className={style.gridColInput}>
        <input
          type="text"
          className={style.textInput}
          value={value}
          onChange={event => setValue(event.target.value)}
          onBlur={onBlur}
        />
      </div>
      <div className={style.gridColButton}>
        <IconButton
          title={messages.actions_delete}
          onClick={onDelete}
          tabIndex={-1}
        >
          <Delete color="secondary" className="material-icons" />
        </IconButton>
      </div>
    </div>
  )
}

export default OptionValueEdit
