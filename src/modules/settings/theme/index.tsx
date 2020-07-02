import { connect } from "react-redux"
import {
  exportReceive,
  exportRequest,
  installReceive,
  installRequest,
} from "../actions"
import Form from "./components/form"

const mapStateToProps = state => ({
  exportInProcess: state.settings.exportInProcess,
  installInProcess: state.settings.installInProcess,
})

const mapDispatchToProps = (dispatch: Function) => ({
  exportRequest: () => {
    dispatch(exportRequest())
  },
  exportReceive: () => {
    dispatch(exportReceive())
  },
  installRequest: () => {
    dispatch(installRequest())
  },
  installReceive: () => {
    dispatch(installReceive())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
