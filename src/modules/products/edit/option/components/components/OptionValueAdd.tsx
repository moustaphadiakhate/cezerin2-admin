import FontIcon from "material-ui/FontIcon"
import IconButton from "material-ui/IconButton"
import React, { useState } from "react"
import messages from "../../../../../../lib/text"
import style from "./../style.css"

const OptionValueAdd = props => {
  const [value, setValues] = useState("")

  const onCreate = () => {
    if (value !== "") {
      props.onCreate(value)
      setValues("")
    }
  }

  function handleKeyPress(event) {
    if (event.keyCode === 13 || event.which === 13) {
      onCreate()
    }
  }

  return (
    <div className={style.gridRow}>
      <div className={style.gridColInput}>
        <input
          type="text"
          className={style.textInput}
          value={value}
          placeholder={messages.newOptionValue}
          onChange={event => setValues(event.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className={style.gridColButton}>
        <IconButton title={messages.add} onClick={onCreate} tabIndex={-1}>
          <FontIcon color="#a1a1a1" className="material-icons">
            add_circle
          </FontIcon>
        </IconButton>
      </div>
    </div>
  )
}

export default OptionValueAdd
