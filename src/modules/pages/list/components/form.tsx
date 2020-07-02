import { Divider, List, ListItem, Paper } from "@material-ui/core"
import { KeyboardArrowRight, LockOutlined } from "@material-ui/icons"
import { Link } from "@reach/router"
import React, { useEffect } from "react"

const PageItem = ({ page }) => {
  const tags = page.tags && page.tags.length > 0 ? page.tags.join(", ") : ""

  return (
    <>
      <Divider />
      <Link to={`/pages/${page.id}`} style={{ textDecoration: "none" }}>
        <ListItem style={!page.enabled ? { color: "rgba(0, 0, 0, 0.3)" } : {}}>
          {page.is_system ? <LockOutlined className="material-icons" /> : null}{" "}
          <div className="row">
            <div className="col-xs-8">{page.meta_title}</div>
            <div className="col-xs-4" style={{ color: "rgba(0, 0, 0, 0.4)" }}>
              {tags}
            </div>
          </div>
          <KeyboardArrowRight className="material-icons" />
        </ListItem>
      </Link>
    </>
  )
}

const PagesList = (props: Readonly<{ pages; onLoad }>) => {
  const { pages, onLoad } = props

  useEffect(() => {
    onLoad()
  }, [])

  const listItems = pages.map((page, index) => (
    <PageItem key={index} page={page} />
  ))

  return (
    <Paper className="paper-box" elevation={1}>
      <div style={{ width: "100%" }}>
        <List style={{ padding: 0 }}>{listItems}</List>
      </div>
    </Paper>
  )
}

export default PagesList
