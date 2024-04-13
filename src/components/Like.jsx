import React, { useReducer } from 'react';

const initialState = {
    count: 0
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

const Like = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleLike = () => {
        dispatch({ type: 'INCREMENT' });
    };

    const handleDislike = () => {
        dispatch({ type: 'DECREMENT' });
    };

    return (
        <div>
            <h2>Likes: {state.count}</h2>
            <button onClick={handleLike}>👍 Like</button>
            <button onClick={handleDislike}>👎 Dislike</button>
        </div>
    );
};

export default Like;

