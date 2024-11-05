import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CalculatorState {
  value: string;
}

const initialState: CalculatorState = {
  value: "",
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    increaseBySymbol: (
      state: CalculatorState,
      action: PayloadAction<string>,
    ) => {
      state.value += action.payload;
    },
    clearSymbol: (state: CalculatorState) => {
      state.value = "";
    },
    calculateTotal: (state: CalculatorState) => {
      try {
        state.value = eval(state.value);
      } catch (error) {
        if (error) {
          state.value = "";
        }
      }
    },
  },
});

export const calculatorReducer = calculatorSlice.reducer;

export const { increaseBySymbol, clearSymbol, calculateTotal } =
  calculatorSlice.actions;
