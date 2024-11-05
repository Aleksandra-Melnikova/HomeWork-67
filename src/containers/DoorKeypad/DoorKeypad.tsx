import { useDispatch, useSelector } from "react-redux";
import {
  checkCorrectPassword,
  decreaseBySymbol,
  increaseBySymbol,
} from "./DoorKeypadSlice.ts";
import { RootState } from "../../app/store.ts";

const DoorKeypad = () => {
  const doorKeypadValue = useSelector((state: RootState) => {
    if (state.doorKeypad.message) {
      return state.doorKeypad.message;
    } else {
      let result: string = "";
      for (let i = 0; i < state.doorKeypad.value.length; i++) {
        result += "*";
      }
      return result;
    }
  });
  const doorKeypadStyle = useSelector((state: RootState) => {
    return state.doorKeypad.style;
  });

  const dispatch = useDispatch();

  const buttons = ["7", "8", "9", "4", "5", "6", "1", "2", "3"];

  return (
    <div className="container mt-5">
      <div className="btns mx-auto mt-5">
        <input
          readOnly
          className={`field-wrapper bg-${doorKeypadStyle} text-center border border-secondary border-1 rounded-1`}
          type={"text"}
          value={doorKeypadValue}
        />
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
          onClick={() => dispatch(decreaseBySymbol())}
          type="button"
        >
          {"<"}
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
          onClick={() => dispatch(checkCorrectPassword())}
          type="button"
        >
          {"E"}
        </button>
      </div>
    </div>
  );
};

export default DoorKeypad;
