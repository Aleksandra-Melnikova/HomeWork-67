import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface DoorKeypadState {
    value: string;
}

const initialState:DoorKeypadState = {
    value: '',
};

export const doorKeypadSlice = createSlice({
    name: "doorKeypad",
   initialState,
    reducers:{
        increaseBySymbol: (state:DoorKeypadState, action:PayloadAction<string>) => {
            state.value += action.payload;
        },
      decreaseBySymbol: (state:DoorKeypadState) => {
        state.value = state.value.slice(0, state.value.length - 1);
      }

    },
});

export const doorKeypadReducer = doorKeypadSlice.reducer;

export const {increaseBySymbol,  decreaseBySymbol} = doorKeypadSlice.actions;