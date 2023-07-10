import { createListenerMiddleware } from "@reduxjs/toolkit";
import { toggleChangeAction, updateAction } from "./reducer";


const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
    actionCreator: toggleChangeAction,
    effect : async (action, listenerApi) => {
        listenerApi.dispatch(updateAction(action.payload))
    }
})

export default listenerMiddleware