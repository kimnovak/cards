import React from 'react';
import CardFormContainer from '@containers/CardForm';
import { ADD_CARD } from '@actionTypes/cards';

const initialCardNumberState = {
    first: '',
    second: '',
    third: '',
    fourth: ''
}

const initialCardState = {
    name: '',
    cardNumber: initialCardNumberState,
    expiresOn: ''
}

function AddCard() {
    return (
        <CardFormContainer
            actionType={ADD_CARD}
            initialCardState={initialCardState}
        />
    )
}

export default React.memo(AddCard);