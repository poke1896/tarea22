import React, { useReducer } from 'react';

const initialState = {
    name: 'No definido'
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return { name: action.payload || 'No definido' };
        default:
            return state;
    }
};

const Name = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleNameChange = (event) => {
        dispatch({ type: 'SET_NAME', payload: event.target.value });
    };

    return (
        <div>
            <h2>Nombre: {state.name}</h2>
            <input type="text" onChange={handleNameChange} placeholder="Ingresa tu nombre" />
        </div>
    );
};

export default Name;
