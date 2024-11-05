import {configureStore} from "@reduxjs/toolkit";
import { doorKeypadReducer } from '../containers/DoorKeypad/DoorKeypadSlice.ts';


export const store = configureStore({
    reducer:{
        doorKeypad: doorKeypadReducer,
    }
});

export type RootState = ReturnType<typeof store.dispatch>;
export type AppDispatch = typeof store.dispatch;