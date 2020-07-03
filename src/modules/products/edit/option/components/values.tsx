import { Paper } from "@material-ui/core"
import React from "react"
import messages from "../../../../../lib/text"
import OptionValueAdd from "./components/OptionValueAdd"
import OptionValueEdit from "./components/OptionValueEdit"
import style from "./style.css"

const OptionValues = ({
  optionValues,
  createOptionValue,
  updateOptionValue,
  deleteOptionValue,
}) => {
  const valueRows = optionValues.map((value, index) => (
    <OptionValueEdit
      key={index}
      value={value}
      onChange={updateOptionValue}
      onDelete={deleteOptionValue}
    />
  ))

  return (
    <Paper className="paper-box" elevation={1}>
      <div className="blue-title" style={{ padding: "20px 30px" }}>
        {messages.optionValues}
      </div>
      <div className={style.grid}>
        {valueRows}
        <OptionValueAdd onCreate={createOptionValue} />
      </div>
    </Paper>
  )
}

export default OptionValues
