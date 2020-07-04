import { connect } from "react-redux"
import * as webstoreAuth from "../../../lib/webstoreAuth"
import { fetchAccount, updateAccount, updateDeveloperAccount } from "../actions"
import Details from "./components/details"

const mapStateToProps = (state: { apps: { account: string } }) => ({
  account: state.apps.account,
})

const mapDispatchToProps = (dispatch: Function, ownProps: any) => ({
  fetchData: () => {
    const webstoreAuthorized = webstoreAuth.isCurrentTokenValid()
    if (webstoreAuthorized) {
      dispatch(fetchAccount())
    } else {
      ownProps.history.push("/apps/login")
    }
  },
  onAccountSubmit: (values: string) => {
    dispatch(updateAccount(values))
  },
  onDeveloperSubmit: (values: string) => {
    dispatch(updateDeveloperAccount(values))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Details)
