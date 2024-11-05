import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface DoorKeypadState {
    value: string;
    style:string;
    message:string
}

const initialState:DoorKeypadState = {
    value: '',
  style:'',
  message:''
};
const correctState:DoorKeypadState = {
  value: '1337',
  style:'',
  message:'',
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
      },
      checkCorrectPassword: (state:DoorKeypadState) => {
          if(state.value === correctState.value) {
            state.style = 'success';
            state.message = "Access Granted";
          }
          else{
            state.style = 'danger';
            state.message = "Access Denied";
          }
      }

    },
});

export const doorKeypadReducer = doorKeypadSlice.reducer;

export const {increaseBySymbol,  decreaseBySymbol, checkCorrectPassword} = doorKeypadSlice.actions;