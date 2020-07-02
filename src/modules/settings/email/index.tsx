import { connect } from "react-redux"
import { fetchEmailSettings } from "../actions"
import Form from "./components/form"

const mapStateToProps = (state: { settings: { emailSettings: string } }) => ({
  emailSettings: state.settings.emailSettings,
})

const mapDispatchToProps = (dispatch: Function) => ({
  onLoad: () => {
    dispatch(fetchEmailSettings())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
