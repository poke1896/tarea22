import React, { useReducer } from 'react';
import './Calc.css';

const initialState = {
    num1: '',
    num2: '',
    result: 0
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_NUM1':
            return { ...state, num1: action.payload };
        case 'SET_NUM2':
            return { ...state, num2: action.payload };
        case 'SET_RESULT':
            return { ...state, result: action.payload };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};

const Calc = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSum = () => {
        dispatch({ type: 'SET_RESULT', payload: Number(state.num1) + Number(state.num2) });
    };

    const handleSubtract = () => {
        dispatch({ type: 'SET_RESULT', payload: Number(state.num1) - Number(state.num2) });
    };

    const handleReset = () => {
        dispatch({ type: 'RESET' });
    };

    return (
        <div className="container">
            <div className="inputs">
                <input type="number" value={state.num1} onChange={(e) => dispatch({ type: 'SET_NUM1', payload: e.target.value })} placeholder="Primer valor" />
                <input type="number" value={state.num2} onChange={(e) => dispatch({ type: 'SET_NUM2', payload: e.target.value })} placeholder="Segundo valor" />
            </div>
            <div className="buttons">
                <button onClick={handleSum}>Sumar</button>
                <button onClick={handleSubtract}>Restar</button>
                <button onClick={handleReset}>Reiniciar</button>
            </div>
            <hr />
            <h2>El resultado es: {state.result}</h2>
        </div>
    );
};

export default Calc;


