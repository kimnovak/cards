import { ADD_CARD, EDIT_CARD } from "@actionTypes/cards";

const initialState = {
    cards: []
}

function cardsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CARD: return (
            {
                cards: [
                    ...state.cards,
                    {
                        ...action.payload,
                        id: state.cards.length
                    }
                ]
            }
        )
        case EDIT_CARD: {
            return state
        }
        default: return state;
    }
}

export default cardsReducer;