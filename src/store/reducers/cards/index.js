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
            const { cards } = state;
            const { payload } = action;
            const index = cards?.findIndex?.(card => card.id === payload?.id)
            const newCards = [...cards]
            newCards.splice(index, 1, payload);
            return {
                cards: newCards
            }
        }
        default: return state;
    }
}

export default cardsReducer;