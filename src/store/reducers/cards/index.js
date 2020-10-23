import { ADD_CARD, EDIT_CARD } from "@actionTypes/cards";
import { v4 as uuidv4 } from 'uuid';

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
                        id: uuidv4()
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