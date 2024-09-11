import { createOvermind } from 'overmind'
import {
    createStateHook,
    createActionsHook,
  } from 'overmind-react'

import * as actions from './actions'
import * as state from './state'


/*
  This is only used to for the MessageList which is a dev/debug tool.
*/

export const config = {
  actions,
  state
}

export const overmindInstance = createOvermind(config, {
  devtools: "localhost:3032",
  name: "Web App",
})
export const useAppState = createStateHook()
export const useActions = createActionsHook()