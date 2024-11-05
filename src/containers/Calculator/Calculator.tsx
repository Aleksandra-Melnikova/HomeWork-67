import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store.ts";
import {
  calculateTotal,
  clearSymbol,
  increaseBySymbol,
} from "./CalculatorSlice.ts";

const Calculator = () => {
  const CalculatorValue = useSelector((state: RootState) => {
    return state.calculator.value;
  });

  const dispatch = useDispatch();

  const buttons = ["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*"];

  return (
    <div className="container mt-5">
      <input
        readOnly
        className={`field-wrapper field-wrapper-calculator  text-center`}
        type={"text"}
        value={CalculatorValue}
      />
      <div className="btns btns-calculator mx-auto mt-1">
        {buttons.map((button) => (
          <button
            className="m-1 btn btn-outline-secondary"
            key={button}
            onClick={() => dispatch(increaseBySymbol(button))}
            type="button"
          >
            {button}
          </button>
        ))}
        <button
          className="m-1 btn btn-outline-secondary"
          onClick={() => dispatch(clearSymbol())}
          type="button"
        >
          {"C"}
        </button>
        <button
          className="m-1 btn btn-outline-secondary"
          onClick={() => dispatch(increaseBySymbol("0"))}
          type="button"
        >
          {"0"}
        </button>
        <button
          className="m-1 btn btn-outline-secondary"
          onClick={() => dispatch(calculateTotal())}
          type="button"
        >
          {"="}
        </button>
        <button
          className="m-1 btn btn-outline-secondary"
          onClick={() => dispatch(increaseBySymbol("/"))}
          type="button"
        >
          {"/"}
        </button>
      </div>
    </div>
  );
};

export default Calculator;
