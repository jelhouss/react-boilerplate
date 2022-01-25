import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

import App from "./app/App"
import reportWebVitals from "./reportWebVitals"

if (process.env.REACT_APP_OFFLINE) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
  const worker = require("./mocks/msw/browserMSWSetup").default
  worker.start()
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
