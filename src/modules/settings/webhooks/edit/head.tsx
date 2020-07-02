import { connect } from "react-redux"
import { withRouter } from "react-router"
import { deleteWebhook } from "../../actions"
import Buttons from "./components/headButtons"

const mapStateToProps = (state: { settings: { webhookEdit: string } }) => ({
  webhook: state.settings.webhookEdit,
})

const mapDispatchToProps = (dispatch: Function, ownProps: any) => ({
  onDelete: (webhookId: string) => {
    dispatch(deleteWebhook(webhookId))
    ownProps.history.push("/settings/webhooks")
  },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Buttons))
