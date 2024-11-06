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
      try {if(eval(state.value)){
        state.value = eval(state.value);
      }
      else{ state.value = "";}
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
