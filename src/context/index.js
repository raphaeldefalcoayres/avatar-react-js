import React from "react"

import { AvatarContextProvider } from "./avatar/context"

const GlobalContext = ({ children }) => {
  return (
    <>
      <AvatarContextProvider>{children}</AvatarContextProvider>
    </>
  )
}

export default GlobalContext