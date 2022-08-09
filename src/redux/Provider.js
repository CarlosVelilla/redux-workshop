import { Provider as ReduxProvider } from "react-redux";

import store from "./store"

import React from 'react'

function Provider({ children }) {
  return (
    <ReduxProvider store={store}>
      {children}
    </ReduxProvider>
  )
}

export default Provider