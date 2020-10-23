import { createSelector } from 'reselect'
export const cardsSelector = state => state.cards?.cards

export const cardSelector = (id) => createSelector(
    cardsSelector,
    (cards) => cards?.find?.(card => card.id === id)
)