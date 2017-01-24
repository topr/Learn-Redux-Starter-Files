export default (state = [], action) => {
    switch (action.type) {
        case 'INCREMENT_LIKES':
            const i = action.index;
            return [
                ...state.slice(0, i), // all before the one we are updating
                { ...state[i], likes: state[i].likes + 1 },
                ...state.slice(i + 1) // all after the one we are updating
            ];
        default:
            return state;
    }
};