import { ADD_CARD } from "../../actionTypes/cards";

const initialState = {
    cards: ['test']
}

function cardsReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_CARD: return (
            {
                cards: [
                    ...state.cards,
                    action.payload
                ]
            }
        )
        default: return state;
    }
}

export default cardsReducer;