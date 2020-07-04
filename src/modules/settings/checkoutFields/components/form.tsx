import Paper from "material-ui/Paper"
import { RadioButton } from "material-ui/RadioButton"
import RaisedButton from "material-ui/RaisedButton"
import React, { useEffect } from "react"
import { Field, reduxForm } from "redux-form"
import { RadioButtonGroup, TextField } from "redux-form-material-ui"
import messages from "../../../../lib/text"
import style from "./style.sass"

const radioButtonStyle = {
  marginTop: 14,
  marginBottom: 14,
}

const CheckoutFieldForm = (
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
      <Paper className="paper-box" zDepth={1}>
        <div className={style.innerBox}>
          <Field
            component={TextField}
            fullWidth
            name="label"
            floatingLabelText={messages.settings_fieldLabel}
          />
          <Field
            component={TextField}
            fullWidth
            name="placeholder"
            floatingLabelText={messages.settings_fieldPlaceholder}
          />
          <div className="blue-title">{messages.settings_fieldStatus}</div>
          <Field name="status" component={RadioButtonGroup}>
            <RadioButton
              value="required"
              label={messages.settings_fieldRequired}
              style={radioButtonStyle}
            />
            <RadioButton
              value="optional"
              label={messages.settings_fieldOptional}
              style={radioButtonStyle}
            />
            <RadioButton
              value="hidden"
              label={messages.settings_fieldHidden}
              style={radioButtonStyle}
            />
          </Field>
        </div>
        <div className="buttons-box">
          <RaisedButton
            type="submit"
            label={messages.save}
            primary
            className={style.button}
            disabled={pristine || submitting}
          />
        </div>
      </Paper>
    </form>
  )
}

export default reduxForm({
  form: "CheckoutFieldForm",
  enableReinitialize: true,
})(CheckoutFieldForm)
