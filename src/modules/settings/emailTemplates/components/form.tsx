import { Button, Paper } from "@material-ui/core"
import React, { useEffect } from "react"
import { Field, reduxForm } from "redux-form"
import { TextField } from "redux-form-material-ui"
import messages from "../../../../lib/text"
import style from "./style.css"

const EmailTemplate = (
  props: Readonly<{ handleSubmit; pristine; submitting; onLoad }>
) => {
  const { handleSubmit, pristine, submitting, onLoad } = props

  useEffect(() => {
    onLoad()
  }, [])

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "initial",
        width: "100%",
      }}
    >
      <Paper className="paper-box" elevation={1}>
        <div className={style.innerBox}>
          <>
            <Field
              component={TextField}
              fullWidth
              name="subject"
              floatingLabelText={messages.settings_emailSubject}
            />
            <Field
              component={TextField}
              fullWidth
              name="body"
              multiLine
              floatingLabelText={messages.settings_emailBody}
            />
          </>
        </div>
        <div className="buttons-box">
          <Button
            type="submit"
            color="primary"
            className={style.button}
            disabled={pristine || submitting}
          >
            {messages.save}
          </Button>
        </div>
      </Paper>
    </form>
  )
}

export default reduxForm({ form: "EmailTemplate", enableReinitialize: true })(
  EmailTemplate
)
