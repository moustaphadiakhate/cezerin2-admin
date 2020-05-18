import FontIcon from "material-ui/FontIcon"
import IconButton from "material-ui/IconButton"
import React from "react"
import messages from "../../../../../lib/text"
import DeleteConfirmation from "../../../../../modules/shared/deleteConfirmation"

export default class Buttons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openDelete: false,
    }
  }

  openDelete = () => {
    this.setState({ openDelete: true })
  }

  closeDelete = () => {
    this.setState({ openDelete: false })
  }

  deletePage = () => {
    this.setState({ openDelete: false })
    this.props.onDelete(this.props.webhook.id)
  }

  render() {
    const { webhook } = this.props
    const webhookName =
      webhook && webhook.url && webhook.url.length > 0 ? webhook.url : "Draft"

    if (webhook) {
      return (
        <>
          <IconButton
            touch
            tooltipPosition="bottom-left"
            tooltip={messages.actions_delete}
            onClick={this.openDelete}
          >
            <FontIcon color="#fff" className="material-icons">
              delete
            </FontIcon>
          </IconButton>
          <DeleteConfirmation
            open={this.state.openDelete}
            isSingle
            itemsCount={1}
            itemName={webhookName}
            onCancel={this.closeDelete}
            onDelete={this.deletePage}
          />
        </>
      )
    }
    return null
  }
}
