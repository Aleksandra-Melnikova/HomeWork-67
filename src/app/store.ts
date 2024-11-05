import { configureStore } from "@reduxjs/toolkit";
import { doorKeypadReducer } from "../containers/DoorKeypad/DoorKeypadSlice.ts";
import { calculatorReducer } from "../containers/Calculator/CalculatorSlice.ts";

export const store = configureStore({
  reducer: {
    doorKeypad: doorKeypadReducer,
    calculator: calculatorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
