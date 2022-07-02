import { configureStore } from '@reduxjs/toolkit';
import Reducer from './reducer'

export const store = configureStore({
    reducer : {
        app : Reducer
    }
})