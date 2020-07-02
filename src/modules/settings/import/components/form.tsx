import { List, ListItem, Paper } from "@material-ui/core"
import { KeyboardArrowRight } from "@material-ui/icons"
import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import messages from "../../../../lib/text"

const ImportSettings = (props: Readonly<{ onLoad }>) => {
  const { onLoad } = props

  useEffect(() => {
    onLoad()
  }, [])

  return (
    <>
      <Paper className="paper-box" elevation={1}>
        <div style={{ width: "100%" }}>
          <List style={{ padding: 0 }}>
            <Link
              to="/settings/import/googlespreadsheet"
              style={{ textDecoration: "none" }}
            >
              <ListItem>
                <KeyboardArrowRight className="material-icons" />{" "}
                <div className="row">
                  <div className="col-xs-6">
                    {messages.settings_spreadsheet}
                  </div>
                </div>
              </ListItem>
            </Link>
          </List>
        </div>
      </Paper>
    </>
  )
}

export default ImportSettings
