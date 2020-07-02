import { connect } from "react-redux"
import { fetchEmailTemplate, updateEmailTemplate } from "../actions"
import Form from "./components/form"

const mapStateToProps = (state: { settings: { emailTemplate: string } }) => ({
  initialValues: state.settings.emailTemplate,
})

const mapDispatchToProps = (dispatch: Function, ownProps: any) => ({
  onLoad: () => {
    const { templateName } = ownProps.match.params
    dispatch(fetchEmailTemplate(templateName))
  },
  onSubmit: (values: string) => {
    dispatch(updateEmailTemplate(values))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
