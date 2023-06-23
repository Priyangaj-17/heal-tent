import React from "react"
import AuthRouter from "./Modules/Auth/AuthRouter"

const App = () => {
  const host = window.location.host.split(":")
  if(host.length <= 3 && host[0] === "localhost")
  return (
    <div>
      <AuthRouter/>
    </div>
  )
  return (
    <></>
  )
}

export default App

