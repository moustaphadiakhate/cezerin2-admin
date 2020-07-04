import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { applyMiddleware, createStore } from "redux"
import thunkMiddleware from "redux-thunk"
import App from "./app"
import "./index.sass"
import { connectToWebSocket } from "./lib/apiWebSocket"
import * as auth from "./lib/auth"
import settings from "./lib/settings"
import { fetchSettings } from "./modules/settings/actions"
import reducers from "./rootReducer"
import * as serviceWorker from "./serviceWorker"

const DEVELOPER_MODE = settings.developerMode === true
if (DEVELOPER_MODE === false) {
  auth.validateCurrentToken()
}

const store = createStore(reducers, applyMiddleware(thunkMiddleware))
store.dispatch(fetchSettings())

if (window.WebSocket) {
  connectToWebSocket(store)
} else {
  console.log("WebSocket is not supported by your browser.")
}

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>{" "}
  </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
