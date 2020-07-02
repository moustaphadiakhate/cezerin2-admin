import { Divider, List, ListItem, Paper } from "@material-ui/core"
import { KeyboardArrowRight } from "@material-ui/icons"
import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import messages from "../../../../../lib/text"

const WebhookItem = ({ webhook }) => {
  const events =
    webhook.events && webhook.events.length > 0
      ? webhook.events.join(", ")
      : "none"
  return (
    <>
      <Divider />
      <Link
        to={`/settings/webhooks/${webhook.id}`}
        style={{ textDecoration: "none" }}
      >
        <ListItem
          style={!webhook.enabled ? { color: "rgba(0, 0, 0, 0.3)" } : {}}
        >
          {" "}
          <div className="row">
            <div className="col-xs-6">{webhook.url}</div>
            <div className="col-xs-6" style={{ color: "rgba(0, 0, 0, 0.4)" }}>
              {events}
            </div>
          </div>
          <KeyboardArrowRight className="material-icons" />
        </ListItem>
      </Link>
    </>
  )
}

const WebhooksList = (props: Readonly<{ webhooks; onLoad }>) => {
  const { webhooks, onLoad } = props

  useEffect(() => {
    onLoad()
  }, [])

  const listItems = webhooks.map((webhook, index) => (
    <WebhookItem key={index} webhook={webhook} />
  ))

  return (
    <>
      <div style={{ margin: 20, color: "rgba(0, 0, 0, 0.52)" }}>
        {messages.webhooksAbout}
      </div>
      <Paper className="paper-box" elevation={1}>
        <div style={{ width: "100%" }}>
          <List style={{ padding: 0 }}>{listItems}</List>
        </div>
      </Paper>
    </>
  )
}

export default WebhooksList
