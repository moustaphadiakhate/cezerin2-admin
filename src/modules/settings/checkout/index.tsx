import { connect } from "react-redux"
import { fetchCheckoutFields } from "../actions"
import Form from "./components/form"

const mapStateToProps = (state: { settings: { checkoutFields: string } }) => ({
  checkoutFields: state.settings.checkoutFields,
})

const mapDispatchToProps = (dispatch: Function) => ({
  onLoad: () => {
    dispatch(fetchCheckoutFields())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
