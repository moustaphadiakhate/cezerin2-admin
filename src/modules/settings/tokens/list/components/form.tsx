import { Divider, List, ListItem, Paper } from "@material-ui/core"
import { KeyboardArrowRight } from "@material-ui/icons"
import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import messages from "../../../../../lib/text"

const TokenItem = ({ token }) => (
  <>
    <Divider />
    <Link
      to={`/settings/tokens/${token.id}`}
      style={{ textDecoration: "none" }}
    >
      <ListItem>
        {" "}
        <div className="row">
          <div className="col-xs-6">{token.name}</div>
          <div className="col-xs-6" style={{ color: "rgba(0, 0, 0, 0.4)" }}>
            {token.email}
          </div>
        </div>{" "}
        <KeyboardArrowRight className="material-icons" />
      </ListItem>
    </Link>
  </>
)

const TokensList = (props: Readonly<{ tokens; onLoad }>) => {
  const { tokens, onLoad } = props

  useEffect(() => {
    onLoad()
  }, [])

  const listItems = tokens.map((token, index) => (
    <TokenItem key={index} token={token} />
  ))

  return (
    <>
      <div style={{ margin: 20, color: "rgba(0, 0, 0, 0.52)" }}>
        {messages.settings_tokenHelp}
      </div>
      <Paper className="paper-box" elevation={1}>
        <div style={{ width: "100%" }}>
          <List style={{ padding: 0 }}>{listItems}</List>
        </div>
      </Paper>
    </>
  )
}

export default TokensList
