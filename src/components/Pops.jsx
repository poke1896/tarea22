import React, { useReducer } from 'react';
import './Pops.css';

const initialState = {
    isOpen: false
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'OPEN':
            return { isOpen: true };
        case 'CLOSE':
            return { isOpen: false };
        default:
            return state;
    }
};

const Pops = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleOpen = () => {
        dispatch({ type: 'OPEN' });
    };

    const handleClose = () => {
        dispatch({ type: 'CLOSE' });
    };

    return (
        <div className="container">
            {state.isOpen ? (
                <div className="modal">
                    <h2>Bienvenidos al curso Multimedios</h2>
                    <button onClick={handleClose}>Cerrar</button>
                </div>
            ) : (
                <button onClick={handleOpen}>Abrir</button>
            )}
        </div>
    );
};

export default Pops;

