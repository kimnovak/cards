const initialState = {
    cards: ['test']
}

function cardsReducer(state = initialState, action) {
    switch(action.type) {
        default: return state;
    }
}

export default cardsReducer;