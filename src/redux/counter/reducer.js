import types from "./types"

import { initialState } from "./state"

const reducer = (state = initialState, action) => {
  if (action.type === types.INCREASE_COUNTER) return state + 1
  if (action.type === types.DECREASE_COUNTER) return state - 1
  return state
}

export default reducer