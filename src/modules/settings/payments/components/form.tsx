import { Divider, List, ListItem, Paper } from "@material-ui/core"
import { KeyboardArrowRight } from "@material-ui/icons"
import React, { useEffect } from "react"
import { Link } from "react-router-dom"

const MethodItem = ({ method }: { method }) => (
  <>
    <Divider />
    <Link
      to={`/settings/payments/${method.id}`}
      style={{ textDecoration: "none" }}
    >
      <ListItem style={!method.enabled ? { color: "rgba(0, 0, 0, 0.3)" } : {}}>
        <KeyboardArrowRight className="material-icons" />{" "}
        <div className="row">
          <div className="col-xs-6">{method.name}</div>
          <div className="col-xs-6" style={{ color: "rgba(0, 0, 0, 0.4)" }}>
            {method.description}
          </div>
        </div>
      </ListItem>
    </Link>
  </>
)

const EmailSettings = (props: Readonly<{ paymentMethods; onLoad }>) => {
  const { paymentMethods, onLoad } = props

  useEffect(() => {
    onLoad()
  }, [])

  const methods = paymentMethods.map((method, index) => (
    <MethodItem key={index} method={method} />
  ))

  return (
    <Paper className="paper-box" elevation={1}>
      <div style={{ width: "100%" }}>
        <List style={{ padding: 0 }}>{methods}</List>
      </div>
    </Paper>
  )
}

export default EmailSettings
