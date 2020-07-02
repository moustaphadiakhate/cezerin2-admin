import { IconButton } from "@material-ui/core"
import { Link } from "@reach/router"
import React from "react"
import messages from "../../../../lib/text"

const Buttons = () => (
  <span>
    <Link to="/settings/shipping/add">
      <IconButton
        touch
        tooltipPosition="bottom-left"
        tooltip={messages.settings_addShippingMethod}
      >
        <FontIcon color="primary" className="material-icons" />
      </IconButton>
    </Link>
  </span>
)

export default Buttons
