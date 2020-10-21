import { combineReducers } from 'redux';
import cardsReducer from '@reducers/cards'

export default combineReducers({
    cards: cardsReducer
})
