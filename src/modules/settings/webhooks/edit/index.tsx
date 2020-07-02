import { connect } from "react-redux"
import {
  createWebhook,
  fetchWebhook,
  receiveWebhook,
  updateWebhook,
} from "../../actions"
import Form from "./components/form"

const mapStateToProps = (
  state: { settings: { webhookEdit: string } },
  ownProps
) => {
  const { webhookId } = ownProps.match.params
  return {
    webhookId,
    initialValues: state.settings.webhookEdit,
  }
}

const mapDispatchToProps = (dispatch: Function, ownProps: any) => ({
  onLoad: () => {
    const { webhookId } = ownProps.match.params
    if (webhookId) {
      dispatch(fetchWebhook(webhookId))
    } else {
      dispatch(receiveWebhook({ enabled: true }))
    }
  },
  onSubmit: (webhook: { id: string }) => {
    if (webhook.id) {
      dispatch(updateWebhook(webhook))
    } else {
      dispatch(createWebhook(webhook))
      ownProps.history.push("/settings/webhooks")
    }
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
