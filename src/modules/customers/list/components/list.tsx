import Divider from "material-ui/Divider"
import FontIcon from "material-ui/FontIcon"
import { List } from "material-ui/List"
import RaisedButton from "material-ui/RaisedButton"
import React, { useEffect } from "react"
import messages from "../../../../lib/text"
import Head from "./head"
import CustomersListItem from "./item"
import style from "./style.css"

const CustomersList = props => {
  const {
    items,
    selected,
    loadingItems,
    hasMore,
    onSelect,
    onSelectAll,
    loadMore,
    settings,
  } = props

  useEffect(() => {
    props.onLoad()
  }, [])

  const rows = items.map((item, index) => (
    <CustomersListItem
      key={index}
      customer={item}
      selected={selected}
      onSelect={onSelect}
      settings={settings}
    />
  ))

  return (
    <>
      <List>
        <Head onSelectAll={onSelectAll} />
        <Divider />
        {rows}
        <div className={style.more}>
          <RaisedButton
            disabled={loadingItems || !hasMore}
            label={messages.actions_loadMore}
            labelPosition="before"
            primary={false}
            icon={<FontIcon className="material-icons">refresh</FontIcon>}
            onClick={loadMore}
          />
        </div>
      </List>
    </>
  )
}

export default CustomersList
