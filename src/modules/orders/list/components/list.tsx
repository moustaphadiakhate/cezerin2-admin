import Divider from "material-ui/Divider"
import FontIcon from "material-ui/FontIcon"
import { List } from "material-ui/List"
import RaisedButton from "material-ui/RaisedButton"
import React from "react"
import messages from "../../../../lib/text"
import Head from "./head"
import OrdersListItem from "./item"
import style from "./style.css"

export default class OrdersList extends React.Component {
  componentDidMount() {
    this.props.onLoad()
  }

  render() {
    const {
      items,
      selected,
      loadingItems,
      hasMore,
      onSelect,
      onSelectAll,
      loadMore,
      settings,
    } = this.props
    const rows = items.map((item, index) => (
      <OrdersListItem
        key={index}
        order={item}
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
}
