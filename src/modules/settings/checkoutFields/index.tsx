import { connect } from "react-redux"
import { fetchCheckoutField, updateCheckoutField } from "../actions"
import Form from "./components/form"

const mapStateToProps = (state: { settings: { checkoutField: string } }) => ({
  initialValues: state.settings.checkoutField,
})

const mapDispatchToProps = (dispatch: Function, ownProps: any) => ({
  onLoad: () => {
    const { fieldName } = ownProps.match.params
    dispatch(fetchCheckoutField(fieldName))
  },
  onSubmit: (values: string) => {
    dispatch(updateCheckoutField(values))
    ownProps.history.push("/settings/checkout")
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
