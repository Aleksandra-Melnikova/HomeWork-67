import {useDispatch, useSelector} from "react-redux";
import { decreaseBySymbol, increaseBySymbol } from './DoorKeypadSlice.ts';
import {RootState} from "../../app/store.ts";

const DoorKeypad = () => {
    const doorKeypadValue = useSelector((state: RootState)=> {
        return state.doorKeypad.value;
    });
    const dispatch = useDispatch();

    const buttons = ['7', '8', '9', '4', '5', '6', '1', '2', '3'];


    return (
        <div className='container mt-5'>
          <div className='btns mx-auto mt-5'>
            <input readOnly className='field-wrapper' type={"text"} value={doorKeypadValue}/>
            {buttons.map((button) => (
              <button key={button}
                      onClick={() => dispatch(increaseBySymbol(button))}
                      type='button'>{button}</button>
            ))}
            <button
                    onClick={() => dispatch( decreaseBySymbol())}
                    type='button'>{'<'}</button>
            <button
                    onClick={() => dispatch(increaseBySymbol('0'))}
                    type='button'>{'0'}</button>
            <button
                    onClick={() => dispatch(increaseBySymbol('g'))}
                    type='button'>{'E'}</button>
          </div>
        </div>
    );
};

export default DoorKeypad;